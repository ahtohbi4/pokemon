import {
    GET_POKEMONS_LIST_REQUEST,
    GET_POKEMONS_LIST_SUCCESS,
    GET_POKEMONS_LIST_FAILURE,
} from './constants';

export const getPokemonsList = () => ({
    type: GET_POKEMONS_LIST_REQUEST,
});

export const getPokemonsListSuccess = (data) => ({
    type: GET_POKEMONS_LIST_SUCCESS,
    payload: data,
});

export const getPokemonsListFailure = (error) => ({
    type: GET_POKEMONS_LIST_FAILURE,
    payload: error,
});
