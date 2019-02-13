import { ActionType } from './actions';
import { ActionTypeKeys } from './constants';
import { StoredPokemonsDataType } from './types';

export interface StoreType {
    readonly pokemons: StoredPokemonsDataType,
}

const initialState: StoreType = {
    pokemons: {
        data: null,
        error: null,
        isLoading: false,
    },
};

export default (state: StoreType = initialState, action: ActionType): StoreType => {
    switch (action.type) {
        case ActionTypeKeys.GET_POKEMONS_REQUEST:
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    error: initialState.pokemons.error,
                    isLoading: true,
                },
            };

        case ActionTypeKeys.GET_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    data: action.payload,
                    isLoading: false,
                },
            };

        case ActionTypeKeys.GET_POKEMONS_FAILURE:
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
