import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '@Utils/api';

import { API_GET_POKEMONS_LIST } from '@Constants';

import * as actions from './actions';
import { GET_POKEMONS_LIST_REQUEST } from './constants';

function* getPokemonsSaga() {
    try {
        const { data: { results } } = yield call(api.get, API_GET_POKEMONS_LIST);

        yield put(actions.getPokemonsListSuccess(results));
    } catch (error) {
        yield put(actions.getPokemonsListFailure(error));
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(GET_POKEMONS_LIST_REQUEST, getPokemonsSaga),
    ]);
}
