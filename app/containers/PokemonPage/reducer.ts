import { ActionType } from './actions';
import { ActionTypes } from './constants';
import {
    PokemonResponseType,
    SpeciesResponseType,
} from './types';

export interface StoreType {
    readonly pokemon: PokemonResponseType,
    readonly species: SpeciesResponseType,
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
        case ActionTypes.GET_POKEMON_REQUEST:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    error: initialState.pokemon.error,
                    isLoading: true,
                },
            };

        case ActionTypes.GET_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    data: action.payload,
                    isLoading: false,
                },
            };

        case ActionTypes.GET_POKEMON_FAILURE:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    data: initialState.pokemon.data,
                    error: action.payload,
                    isLoading: false,
                },
            };

        case ActionTypes.GET_SPECIES_REQUEST:
            return {
                ...state,
                species: {
                    ...state.species,
                    error: initialState.species.error,
                    isLoading: true,
                },
            };

        case ActionTypes.GET_SPECIES_SUCCESS:
            return {
                ...state,
                species: {
                    ...state.species,
                    data: action.payload,
                    isLoading: false,
                },
            };

        case ActionTypes.GET_SPECIES_FAILURE:
            return {
                ...state,
                species: {
                    ...state.species,
                    data: initialState.species.data,
                    error: action.payload,
                    isLoading: false,
                },
            };

        case ActionTypes.RESET_POKEMON_DATA:
            return {
                ...state,
                pokemon: initialState.pokemon,
                species: initialState.species,
            };

        default:
            return state;
    }
};
