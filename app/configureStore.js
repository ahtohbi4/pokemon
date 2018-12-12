import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';
import sagas from './sagas';

export default function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(
        createReducer(),
        initialState,
        composedEnhancers,
    );

    sagas.forEach(sagaMiddleware.run);

    return store;
}
