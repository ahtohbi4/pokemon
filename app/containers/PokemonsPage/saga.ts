import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '@Utils/api';

import * as actions from './actions';
import { ActionTypes } from './constants';

function* getPokemonsSaga(action: actions.ActionType) {
    const { payload: { url } } = action;

    try {
        const { data } = yield call(api.get, url);

        yield put(actions.getPokemonsSuccess(data));
    } catch (error) {
        yield put(actions.getPokemonsFailure(error));
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(ActionTypes.GET_POKEMONS_REQUEST, getPokemonsSaga),
    ]);
}
