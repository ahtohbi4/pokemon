import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from '@containers/Router';

import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
    (
        <Provider store={store}>
            <Router />
        </Provider>
    ),
    document.getElementById('app'),
);

