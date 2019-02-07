import { createAction } from '@Utils/redux';

import { ActionTypes } from './constants';
import {
    PokemonResponseType,
    SpeciesResponseType,
} from './types';

export const getPokemonRequest = (
    slug: string,
) => createAction(ActionTypes.GET_POKEMON_REQUEST, slug);

export const getPokemonSuccess = (
    payload: PokemonResponseType,
) => createAction(ActionTypes.GET_POKEMON_SUCCESS, payload);

export const getPokemonFailure = (
    error: any,
) => createAction(ActionTypes.GET_POKEMON_SUCCESS, error);

export const resetPokemon = () => createAction(ActionTypes.RESET_POKEMON_DATA);

export const getSpeciesRequest = (
    slug: string,
) => createAction(ActionTypes.GET_SPECIES_REQUEST, slug);

export const getSpeciesSuccess = (
    payload: SpeciesResponseType,
) => createAction(ActionTypes.GET_SPECIES_SUCCESS, payload);

export const getSpeciesFailure = (
    error: any,
) => createAction(ActionTypes.GET_SPECIES_FAILURE, error);

export type ActionType =
    ReturnType<typeof getPokemonRequest> &
    ReturnType<typeof getPokemonSuccess> &
    ReturnType<typeof getPokemonFailure> &
    ReturnType<typeof resetPokemon> &
    ReturnType<typeof getSpeciesRequest> &
    ReturnType<typeof getSpeciesSuccess> &
    ReturnType<typeof getSpeciesFailure>;
