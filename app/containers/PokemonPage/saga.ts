import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '@Utils/api';
import { interpolate } from '@Utils/formatString';

import {
    API_GET_POKEMON,
    API_GET_SPECIES,
} from '@Constants';

import {
    GetPokemonRequestActionCreatorType,
    GetSpeciesRequestActionCreatorType,

    getPokemonFailure,
    getPokemonSuccess,

    getSpeciesFailure,
    getSpeciesRequest,
    getSpeciesSuccess,
} from './actions';
import { ActionTypeKeys } from './constants';

function* getPokemonSaga(action: ReturnType<GetPokemonRequestActionCreatorType>) {
    const { payload: id } = action;

    try {
        const { data: pokemon } = yield call(api.get, interpolate(API_GET_POKEMON, { id }));

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
        const { data: species } = yield call(api.get, interpolate(API_GET_SPECIES, { id }));

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
