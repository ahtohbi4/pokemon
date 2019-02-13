import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '@Utils/api';

import {
    ActionType,

    getPokemonsFailure,
    getPokemonsSuccess,
} from './actions';
import { ActionTypeKeys } from './constants';

function* getPokemonsSaga(action: ActionType) {
    const { payload: url } = action;

    try {
        const { data } = yield call(api.get, url);

        yield put(getPokemonsSuccess(data));
    } catch (error) {
        yield put(getPokemonsFailure(error));
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(ActionTypeKeys.GET_POKEMONS_REQUEST, getPokemonsSaga),
    ]);
}
