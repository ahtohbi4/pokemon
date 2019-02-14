import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import Router, { Redirect, Route, Switch } from '@Containers/Router';

import App from '@Containers/App';
import Theme from '@Containers/Theme';

import NotFoundPage from '@Containers/NotFoundPage';
import PokemonPage from '@Containers/PokemonPage';
import PokemonsPage from '@Containers/PokemonsPage';

const store = configureStore();

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <Theme>
                    <App>
                        <Switch>
                            <Redirect from="/" to="/pokemons/" />

                            <Route path="/pokemon/" component={PokemonPage} />
                            <Route path="/pokemons/" component={PokemonsPage} />

                            <Route path="*" component={NotFoundPage} />
                        </Switch>
                    </App>
                </Theme>
            </Router>
        </Provider>
    ),
    document.getElementById('app'),
);
