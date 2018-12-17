import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import Router, { Redirect, Route, Switch } from '@containers/Router';

import App from '@containers/App';

import PokemonPage from '@containers/PokemonPage';
import PokemonsPage from '@containers/PokemonsPage';
import NotFoundPage from '@containers/NotFoundPage';

const store = configureStore();

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <App>
                    <Switch>
                        <Redirect from="/" to="/pokemons/" />

                        <Route path="/pokemon/" component={PokemonPage} />
                        <Route path="/pokemons/" component={PokemonsPage} />

                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </App>
            </Router>
        </Provider>
    ),
    document.getElementById('app'),
);
