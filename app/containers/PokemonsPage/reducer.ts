import { PokemonsList } from '../../types';

import { ActionType } from './actions';
import {
    GET_POKEMONS_LIST_FAILURE,
    GET_POKEMONS_LIST_REQUEST,
    GET_POKEMONS_LIST_SUCCESS,
} from './constants';

export interface Store {
    pokemons: {
        data: PokemonsList|null,
        error: string|null,
        isLoading: boolean
    },
}

const initialState = {
    pokemons: {
        data: null,
        error: null,
        isLoading: false,
    },
};

export default (state: Store = initialState, action: ActionType): Store => {
    switch (action.type) {
        case GET_POKEMONS_LIST_REQUEST:
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    error: initialState.pokemons.error,
                    isLoading: true,
                },
            };

        case GET_POKEMONS_LIST_SUCCESS:
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    data: action.payload,
                    isLoading: false,
                },
            };

        case GET_POKEMONS_LIST_FAILURE:
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    data: initialState.pokemons.data,
                    error: action.payload,
                    isLoading: false,
                },
            };

        default:
            return state;
    }
};
