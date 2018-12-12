import {
    GET_POKEMON_FAILURE,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,

    GET_SPECIES_FAILURE,
    GET_SPECIES_REQUEST,
    GET_SPECIES_SUCCESS,
} from './constants';

export const getPokemon = (slug) => ({
    type: GET_POKEMON_REQUEST,
    payload: slug,
});

export const getPokemonSuccess = (data) => ({
    type: GET_POKEMON_SUCCESS,
    payload: data,
});

export const getPokemonFailure = (error) => ({
    type: GET_POKEMON_FAILURE,
    payload: error,
});

export const getSpecies = (slug) => ({
    type: GET_SPECIES_REQUEST,
    payload: slug,
});

export const getSpeciesSuccess = (data) => ({
    type: GET_SPECIES_SUCCESS,
    payload: data,
});

export const getSpeciesFailure = (error) => ({
    type: GET_SPECIES_FAILURE,
    payload: error,
});
