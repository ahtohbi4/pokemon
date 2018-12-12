import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '@utils/api';
import interpolate from '@utils/interpolate';

import {
    API_GET_POKEMON,
    API_GET_SPECIES,
} from '@constants';

import * as actions from './actions';
import {
    GET_POKEMON_REQUEST,
    GET_SPECIES_REQUEST,
} from './constants';

function* getPokemonSaga(action) {
    try {
        const { payload: id } = action;
        const { data: pokemon } = yield call(api.get, interpolate(API_GET_POKEMON, { id }));

        yield put(actions.getPokemonSuccess(pokemon));

        const { species: { name: speciesSlug } } = pokemon;

        yield put(actions.getSpecies(speciesSlug));
    } catch (error) {
        console.error(error)
        yield put(actions.getPokemonFailure(error));
    }
}

function* getSpeciesSaga(action) {
    try {
        const { payload: id } = action;
        const { data: species } = yield call(api.get, interpolate(API_GET_SPECIES, { id }));

        yield put(actions.getSpeciesSuccess(species));
    } catch (error) {
        yield put(actions.getSpeciesFailure(error));
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(GET_POKEMON_REQUEST, getPokemonSaga),
        takeLatest(GET_SPECIES_REQUEST, getSpeciesSaga),
    ]);
}
