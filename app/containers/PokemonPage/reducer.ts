import { ActionType } from './actions';
import {
    GET_POKEMON_FAILURE,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,

    GET_SPECIES_FAILURE,
    GET_SPECIES_REQUEST,
    GET_SPECIES_SUCCESS,

    RESET_POKEMON_DATA,
} from './constants';
import {
    PokemonRequestType,
    SpeciesListRequestType,
} from './types';

export interface StoreType {
    pokemon: PokemonRequestType,
    species: SpeciesListRequestType,
}

const initialState: StoreType = {
    pokemon: {
        data: null,
        error: null,
        isLoading: false,
    },
    species: {
        data: null,
        error: null,
        isLoading: false,
    },
};

export default (state: StoreType = initialState, action: ActionType): StoreType => {
    switch (action.type) {
        case GET_POKEMON_REQUEST:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    error: initialState.pokemon.error,
                    isLoading: true,
                },
            };

        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    data: action.payload,
                    isLoading: false,
                },
            };

        case GET_POKEMON_FAILURE:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    data: initialState.pokemon.data,
                    error: action.payload,
                    isLoading: false,
                },
            };

        case GET_SPECIES_REQUEST:
            return {
                ...state,
                species: {
                    ...state.species,
                    error: initialState.species.error,
                    isLoading: true,
                },
            };

        case GET_SPECIES_SUCCESS:
            return {
                ...state,
                species: {
                    ...state.species,
                    data: action.payload,
                    isLoading: false,
                },
            };

        case GET_SPECIES_FAILURE:
            return {
                ...state,
                species: {
                    ...state.species,
                    data: initialState.species.data,
                    error: action.payload,
                    isLoading: false,
                },
            };

        case RESET_POKEMON_DATA:
            return {
                ...state,
                pokemon: initialState.pokemon,
                species: initialState.species,
            };

        default:
            return state;
    }
};
