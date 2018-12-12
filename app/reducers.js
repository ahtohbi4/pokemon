import { combineReducers } from 'redux';

import pokemonPageReducer from '@containers/PokemonPage/reducer';
import { CONTAINER_ALIAS as POKEMON_PAGE_CONTAINER_ALIAS } from '@containers/PokemonPage/constants';

import pokemonsPageReducer from '@containers/PokemonsPage/reducer';
import { CONTAINER_ALIAS as POKEMONS_PAGE_CONTAINER_ALIAS } from '@containers/PokemonsPage/constants';

import routerReducer from '@containers/Router/reducer';
import { CONTAINER_ALIAS as ROUTER_CONTAINER_ALIAS } from '@containers/Router/constants';

export default function createReducer(injectedReducers) {
    return combineReducers({
        [POKEMON_PAGE_CONTAINER_ALIAS]: pokemonPageReducer,
        [POKEMONS_PAGE_CONTAINER_ALIAS]: pokemonsPageReducer,
        [ROUTER_CONTAINER_ALIAS]: routerReducer,
        ...injectedReducers,
    });
}
