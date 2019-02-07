import { API_GET_POKEMONS_LIST } from '@Constants';
import { createAction } from '@Utils/redux';

import { ActionTypes } from './constants';
import { PokemonsListResponseType } from './types';

export const getPokemonsRequest = (
    payload: { url: string } = { url: API_GET_POKEMONS_LIST }
) => createAction(ActionTypes.GET_POKEMONS_REQUEST, payload);

export const getPokemonsSuccess = (
    payload: PokemonsListResponseType
) => createAction(ActionTypes.GET_POKEMONS_SUCCESS, payload);

export const getPokemonsFailure = (
    payload: any
) => createAction(ActionTypes.GET_POKEMONS_FAILURE, payload);

export type ActionType =
    ReturnType<typeof getPokemonsRequest> &
    ReturnType<typeof getPokemonsSuccess> &
    ReturnType<typeof getPokemonsFailure>;
