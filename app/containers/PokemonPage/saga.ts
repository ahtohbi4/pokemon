import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '@Utils/api';
import { interpolate } from '@Utils/formatString';

import { ApiUrls } from '@Constants';

import {
    getPokemonFailure,
    GetPokemonRequestActionCreatorType,
    getPokemonSuccess,
    getSpeciesFailure,
    getSpeciesRequest,
    GetSpeciesRequestActionCreatorType,
    getSpeciesSuccess,
} from './actions';
import { ActionTypeKeys } from './constants';

function* getPokemonSaga(action: ReturnType<GetPokemonRequestActionCreatorType>) {
    const { payload: id } = action;

    try {
        const { data: pokemon } = yield call(api.get, interpolate(ApiUrls.GET_POKEMON, { id }));

        yield put(getPokemonSuccess(pokemon));

        const { species: { name: speciesSlug } } = pokemon;

        yield put(getSpeciesRequest(speciesSlug));
    } catch (error) {
        yield put(getPokemonFailure(error));
    }
}

function* getSpeciesSaga(action: ReturnType<GetSpeciesRequestActionCreatorType>) {
    const { payload: id } = action;

    try {
        const { data: species } = yield call(api.get, interpolate(ApiUrls.GET_SPECIES, { id }));

        yield put(getSpeciesSuccess(species));
    } catch (error) {
        yield put(getSpeciesFailure(error));
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(ActionTypeKeys.GET_POKEMON_REQUEST, getPokemonSaga),
        takeLatest(ActionTypeKeys.GET_SPECIES_REQUEST, getSpeciesSaga),
    ]);
}
