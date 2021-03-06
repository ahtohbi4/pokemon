import createAction from 'create-action-ts';

import {
    PokemonType,
    SpeciesType,
} from '@Types';

import { ActionTypeKeys } from './constants';

/**
 * Creates an action to request of the pokemon's data.
 *
 * @param {string} id
 */
export const getPokemonRequest = (id: string) => createAction(ActionTypeKeys.GET_POKEMON_REQUEST, id);
export type GetPokemonRequestActionCreatorType = typeof getPokemonRequest;

/**
 * Creates an action with successful response of the pokemon's data.
 *
 * @param {PokemonType} data
 */
export const getPokemonSuccess = (data: PokemonType) => createAction(ActionTypeKeys.GET_POKEMON_SUCCESS, data);
type GetPokemonSuccessActionCreatorType = typeof getPokemonSuccess;

/**
 * Creates an action with a failed response of the pokemon's data.
 *
 * @param {string} [error]
 */
export const getPokemonFailure = (error: string) => createAction(ActionTypeKeys.GET_POKEMON_FAILURE, error);
type GetPokemonFailureActionCreatorType = typeof getPokemonFailure;

/**
 * Creates an action to reset pokemon's data.
 */
export const resetPokemon = () => createAction(ActionTypeKeys.RESET_POKEMON_DATA);
export type ResetPokemonActionCreatorType = typeof resetPokemon;

/**
 * Creates an action to request of the pokemon's species data.
 *
 * @param {string} id
 */
export const getSpeciesRequest = (id: string) => createAction(ActionTypeKeys.GET_SPECIES_REQUEST, id);
export type GetSpeciesRequestActionCreatorType = typeof getSpeciesRequest;

/**
 * Creates an action with successful response of the pokemon's species data.
 *
 * @param {SpeciesType} data
 */
export const getSpeciesSuccess = (data: SpeciesType) => createAction(ActionTypeKeys.GET_SPECIES_SUCCESS, data);
type GetSpeciesSuccessActionCreatorType = typeof getSpeciesSuccess;

/**
 * Creates an action with a failed response of the pokemon's species data.
 *
 * @param {string} [error]
 */
export const getSpeciesFailure = (error: string) => createAction(ActionTypeKeys.GET_SPECIES_FAILURE, error);
type GetSpeciesFailureActionCreatorType = typeof getSpeciesFailure;

export type ActionType =
    ReturnType<GetPokemonFailureActionCreatorType> |
    ReturnType<GetPokemonRequestActionCreatorType> |
    ReturnType<GetPokemonSuccessActionCreatorType> |

    ReturnType<GetSpeciesFailureActionCreatorType> |
    ReturnType<GetSpeciesRequestActionCreatorType> |
    ReturnType<GetSpeciesSuccessActionCreatorType> |

    ReturnType<ResetPokemonActionCreatorType>;
