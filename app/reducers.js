import { combineReducers } from 'redux';

import routerReducer from '@containers/Router/reducer';
import { CONTAINER_ALIAS as ROUTER_CONTAINER_ALIAS } from '@containers/Router/constants';

import pokemonsPageReducer from '@containers/PokemonsPage/reducer';
import { CONTAINER_ALIAS as POKEMONS_PAGE_CONTAINER_ALIAS } from '@containers/PokemonsPage/constants';

export default function createReducer(injectedReducers) {
    return combineReducers({
        [POKEMONS_PAGE_CONTAINER_ALIAS]: pokemonsPageReducer,
        [ROUTER_CONTAINER_ALIAS]: routerReducer,
        ...injectedReducers,
    });
}
