import { combineReducers } from 'redux';

import { StoreType } from '@Types';

import appReducer from '@Containers/App/reducer';
import pokemonPageReducer from '@Containers/PokemonPage/reducer';
import pokemonsPageReducer from '@Containers/PokemonsPage/reducer';
import routerReducer from '@Containers/Router/reducer';

import { CONTAINER_ALIAS as APP_CONTAINER_ALIAS } from '@Containers/App/constants';
import { CONTAINER_ALIAS as POKEMON_PAGE_CONTAINER_ALIAS } from '@Containers/PokemonPage/constants';
import { CONTAINER_ALIAS as POKEMONS_PAGE_CONTAINER_ALIAS } from '@Containers/PokemonsPage/constants';
import { CONTAINER_ALIAS as ROUTER_CONTAINER_ALIAS } from '@Containers/Router/constants';

export default function createReducer(injectedReducers: StoreType = {}) {
    return combineReducers({
        [APP_CONTAINER_ALIAS]: appReducer,
        [ROUTER_CONTAINER_ALIAS]: routerReducer,

        [POKEMON_PAGE_CONTAINER_ALIAS]: pokemonPageReducer,
        [POKEMONS_PAGE_CONTAINER_ALIAS]: pokemonsPageReducer,
        ...injectedReducers,
    });
}
