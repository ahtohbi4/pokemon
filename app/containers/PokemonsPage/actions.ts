import { PokemonsList } from '../../types';

import {
    GET_POKEMONS_LIST_REQUEST,
    GET_POKEMONS_LIST_SUCCESS,
    GET_POKEMONS_LIST_FAILURE,
} from './constants';

interface GetPokemonsListAction {
    type: string,
}

interface GetPokemonsListSuccessAction {
    type: string,
    payload: PokemonsList,
}

interface GetPokemonsListFailureAction {
    type: string,
    payload: any,
}

export type ActionType =
    GetPokemonsListAction&
    GetPokemonsListSuccessAction&
    GetPokemonsListFailureAction;

export const getPokemonsList = (): GetPokemonsListAction => ({
    type: GET_POKEMONS_LIST_REQUEST,
});

export const getPokemonsListSuccess = (data: PokemonsList): GetPokemonsListSuccessAction => ({
    type: GET_POKEMONS_LIST_SUCCESS,
    payload: data,
});

export const getPokemonsListFailure = (error: any): GetPokemonsListFailureAction => ({
    type: GET_POKEMONS_LIST_FAILURE,
    payload: error,
});
