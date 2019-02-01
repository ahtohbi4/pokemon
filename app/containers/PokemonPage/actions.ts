import {
    PokemonType,
    SpeciesType,
} from '@Types';

import {
    GET_POKEMON_FAILURE,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,

    GET_SPECIES_FAILURE,
    GET_SPECIES_REQUEST,
    GET_SPECIES_SUCCESS,

    RESET_POKEMON_DATA,
} from './constants';

interface GetPokemonType {
    type: string,
    payload: string,
}

export const getPokemon = (slug: string): GetPokemonType => ({
    type: GET_POKEMON_REQUEST,
    payload: slug,
});

interface GetPokemonSuccessType {
    type: string,
    payload: PokemonType,
}

export const getPokemonSuccess = (data: PokemonType): GetPokemonSuccessType => ({
    type: GET_POKEMON_SUCCESS,
    payload: data,
});

interface GetPokemonFailureType {
    type: string,
    payload: any,
}

export const getPokemonFailure = (error: any): GetPokemonFailureType => ({
    type: GET_POKEMON_FAILURE,
    payload: error,
});

interface GetSpeciesType {
    type: string,
    payload: string,
}

export const getSpecies = (slug: string): GetSpeciesType => ({
    type: GET_SPECIES_REQUEST,
    payload: slug,
});

interface GetSpeciesSuccessType {
    type: string,
    payload: SpeciesType,
}

export const getSpeciesSuccess = (data: SpeciesType): GetSpeciesSuccessType => ({
    type: GET_SPECIES_SUCCESS,
    payload: data,
});

interface GetSpeciesFailureType {
    type: string,
    payload: any,
}

export const getSpeciesFailure = (error: any): GetSpeciesFailureType => ({
    type: GET_SPECIES_FAILURE,
    payload: error,
});

interface ResetPokemonType {
    type: string,
}

export const resetPokemon = (): ResetPokemonType => ({
    type: RESET_POKEMON_DATA,
});

export type ActionType =
    GetPokemonType &
    GetPokemonSuccessType &
    GetPokemonFailureType &
    GetSpeciesType &
    GetSpeciesSuccessType &
    GetSpeciesFailureType &
    ResetPokemonType;
