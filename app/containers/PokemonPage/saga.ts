import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '@Utils/api';
import { interpolate } from '@Utils/formatString';

import {
    API_GET_POKEMON,
    API_GET_SPECIES,
} from '@Constants';

import * as actions from './actions';
import { ActionTypes } from './constants';

function* getPokemonSaga(action: actions.ActionType) {
    try {
        const { payload: id } = action;
        const { data: pokemon } = yield call(api.get, interpolate(API_GET_POKEMON, { id }));

        yield put(actions.getPokemonSuccess(pokemon));

        const { species: { name: speciesSlug } } = pokemon;

        yield put(actions.getSpeciesRequest(speciesSlug));
    } catch (error) {
        yield put(actions.getPokemonFailure(error));
    }
}

function* getSpeciesSaga(action: actions.ActionType) {
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
        takeLatest(ActionTypes.GET_POKEMON_REQUEST, getPokemonSaga),
        takeLatest(ActionTypes.GET_SPECIES_REQUEST, getSpeciesSaga),
    ]);
}
