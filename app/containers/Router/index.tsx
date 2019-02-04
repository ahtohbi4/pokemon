import React, { PureComponent } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import { URL_PREFIX } from './constants';
import selectRouter from './selectors';
import {
    RouteType,
    RouterType,
} from './types';

import Link from './components/Link';
import Redirect from './components/Redirect';
import Route from './components/Route';
import RouterContext from './components/RouterContext';
import Switch from './components/Switch';

const { location: { hash: initialHash } } = window;

interface PropsType {
    router: RouterType,
    changeLocation: (route: RouteType) => void,
}

const HASH_CHANGE_EVENT_NAME = 'hashchange';

export {
    Link,
    Redirect,
    Route,
    Switch,
};
export * from './types';

class Router extends PureComponent<PropsType> {
    static mapStateToProps = selectRouter;

    static mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

    private static parseHash(hash: string) {
        const [
            pathname = '/',
            query = '',
        ] = hash
            .replace(new RegExp(`^${URL_PREFIX}`), '')
            .split('?')
            .filter((item) => (item !== ''));

        return {
            query: query
                .split('&')
                .filter((pair) => (pair !== ''))
                .reduce((result, pair) => {
                    const [key, value] = pair.split('=');

                    return {
                        ...result,
                        [key]: (value === undefined) ? true : value,
                    };
                }, {}),
            pathname: pathname.replace(/([^/])$/g, (_matches, lastSymbol) => `${lastSymbol}/`),
        };
    }

    constructor(props: PropsType) {
        super(props);

        const { changeLocation } = this.props;

        changeLocation(Router.parseHash(initialHash));

        this.handleHashChange = this.handleHashChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener(HASH_CHANGE_EVENT_NAME, this.handleHashChange);
    }

    componentWillUnmount() {
        window.removeEventListener(HASH_CHANGE_EVENT_NAME, this.handleHashChange);
    }

    private handleHashChange() {
        const { location: { hash } } = window;
        const { changeLocation } = this.props;

        changeLocation(Router.parseHash(hash));
    }

    render() {
        const { children, router } = this.props;

        return (
            <RouterContext.Provider value={{ router }}>
                {children}
            </RouterContext.Provider>
        );
    }
}

export default connect(
    Router.mapStateToProps,
    Router.mapDispatchToProps,
)(Router);
