import { combineReducers } from 'redux';

import pokemonPageReducer from '@Containers/PokemonPage/reducer';
import { CONTAINER_ALIAS as POKEMON_PAGE_CONTAINER_ALIAS } from '@Containers/PokemonPage/constants';

import pokemonsPageReducer from '@Containers/PokemonsPage/reducer';
import { CONTAINER_ALIAS as POKEMONS_PAGE_CONTAINER_ALIAS } from '@Containers/PokemonsPage/constants';

import routerReducer from '@Containers/Router/reducer';
import { CONTAINER_ALIAS as ROUTER_CONTAINER_ALIAS } from '@Containers/Router/constants';

export default function createReducer(injectedReducers: object = {}) {
    return combineReducers({
        [ROUTER_CONTAINER_ALIAS]: routerReducer,

        [POKEMON_PAGE_CONTAINER_ALIAS]: pokemonPageReducer,
        [POKEMONS_PAGE_CONTAINER_ALIAS]: pokemonsPageReducer,
        ...injectedReducers,
    });
}
