import { Pokemon } from '../../types';

import {
    GET_POKEMON_FAILURE,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,

    GET_SPECIES_FAILURE,
    GET_SPECIES_REQUEST,
    GET_SPECIES_SUCCESS,

    RESET_POKEMON_DATA,
} from './constants';

interface GetPokemonAction {
    type: string,
    payload: string,
}

interface GetPokemonSuccessAction {
    type: string,
    payload: PokemonType,
}

export const getPokemon = (slug: string): GetPokemonAction => ({
    type: GET_POKEMON_REQUEST,
    payload: slug,
});

export const getPokemonSuccess = (data: PokemonType): GetPokemonSuccessAction => ({
    type: GET_POKEMON_SUCCESS,
    payload: data,
});

export const getPokemonFailure = (error: any) => ({
    type: GET_POKEMON_FAILURE,
    payload: error,
});

export const getSpecies = (slug: string) => ({
    type: GET_SPECIES_REQUEST,
    payload: slug,
});

export const getSpeciesSuccess = (data) => ({
    type: GET_SPECIES_SUCCESS,
    payload: data,
});

export const getSpeciesFailure = (error: any) => ({
    type: GET_SPECIES_FAILURE,
    payload: error,
});

export const resetPokemon = () => ({
    type: RESET_POKEMON_DATA,
});
