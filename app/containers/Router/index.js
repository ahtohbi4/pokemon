import React, { Fragment, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import selectRouter from './selectors';

import Redirect from './components/Redirect';
import Route from './components/Route';
import RouterContext from './components/RouterContext';
import Switch from './components/Switch';

const { location: { hash: initialHash } } = window;

export {
    Redirect,
    Route,
    Switch,
};

class Router extends PureComponent {
    static mapStateToProps = selectRouter();

    static mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

    static parse(hash) {
        const [pathname = '/', query = ''] = hash.replace(/^#!/, '').split('?').filter((item) => (item !== ''));

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

    constructor(props) {
        super(props);

        const { changeLocation } = props;

        changeLocation(Router.parse(initialHash));

        this.hanleHashChange = this.hanleHashChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.hanleHashChange);
    }

    componentWillUnmount() {
        window.addEventListener('hashchange', this.hanleHashChange);
    }

    hanleHashChange(event) {
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
