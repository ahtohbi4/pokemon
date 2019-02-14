import createAction from 'create-action-ts';

import { ApiUrls } from '@Constants';
import {
    PokemonType,
    ResponseIterativeDataType,
} from '@Types';

import { ActionTypeKeys } from './constants';

/**
 * Creates an action to request of the pokemons list.
 *
 * @param {string} [url=<API_GET_POKEMONS_LIST>]
 */
export const getPokemonsRequest = (url: string = ApiUrls.GET_POKEMONS_LIST) => createAction(
    ActionTypeKeys.GET_POKEMONS_REQUEST,
    url,
);
export type GetPokemonsRequestActionCreatorType = typeof getPokemonsRequest;

/**
 * Creates an action with successful response of the pokemons list.
 *
 * @param {ResponseIterativeDataType<PokemonType>} data
 */
export const getPokemonsSuccess = (data: ResponseIterativeDataType<PokemonType>) => createAction(
    ActionTypeKeys.GET_POKEMONS_SUCCESS,
    data,
);
type GetPokemonsSuccessActionCreatorType = typeof getPokemonsSuccess;

/**
 * Creates an action with a failed response of the pokemons list.
 *
 * @param {*} [error]
 */
export const getPokemonsFailure = (error: any) => createAction(ActionTypeKeys.GET_POKEMONS_FAILURE, error);
type GetPokemonsFailureActionCreatorType = typeof getPokemonsFailure;

export type ActionType =
    ReturnType<GetPokemonsFailureActionCreatorType> |
    ReturnType<GetPokemonsRequestActionCreatorType> |
    ReturnType<GetPokemonsSuccessActionCreatorType>;
