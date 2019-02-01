import React, { PureComponent } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import selectRouter from './selectors';
import {
    RouteType,
    RouterType,
} from './types';

import Redirect from './components/Redirect';
import Route from './components/Route';
import RouterContext from './components/RouterContext';
import Switch from './components/Switch';

const { location: { hash: initialHash } } = window;

interface RouterPropsType {
    router: RouterType,
    changeLocation: (route: RouteType) => void,
}

export {
    Redirect,
    Route,
    Switch,
};

class Router extends PureComponent<RouterPropsType> {
    static mapStateToProps = selectRouter;

    static mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

    static parse(hash: string) {
        const [
            pathname = '/',
            query = '',
        ] = hash
            .replace(/^#!/, '')
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
            pathname: pathname.replace(/([^/])$/g, (matches, lastSymbol) => `${lastSymbol}/`),
        };
    }

    constructor(props: RouterPropsType) {
        super(props);

        const { changeLocation } = this.props;

        changeLocation(Router.parse(initialHash));

        this.handleHashChange = this.handleHashChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.handleHashChange);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.handleHashChange);
    }

    private handleHashChange(event: HashChangeEvent) {
        const { target: { location: { hash } } } = event;
        const { changeLocation } = this.props;

        changeLocation(Router.parse(hash));
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
