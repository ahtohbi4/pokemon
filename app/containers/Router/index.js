import React, { Fragment, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '@containers/App';

import NotFoundPage from '@containers/NotFoundPage';
import PokemonPage from '@containers/PokemonPage';
import PokemonsPage from '@containers/PokemonsPage';

import * as actions from './actions';
import selectRouter from './selectors';

const { location: { hash: initialHash } } = window;

class Router extends PureComponent {
    static mapStateToProps = selectRouter();

    static mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

    static parse(hash) {
        const [url = '/', query = ''] = hash.replace(/^#!/, '').split('?').filter((item) => (item !== ''));

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
            url: url.replace(/([^/])$/g, (matches, lastSymbol) => `${lastSymbol}/`),
        };
    }

    constructor(props) {
        super(props);

        const { changeLocation } = props;

        changeLocation(Router.parse(initialHash));

        this.hanleHashChange = this.hanleHashChange.bind(this);
    }

    get route() {
        const { router: { url } } = this.props;

        switch (url) {
            case '/':
            case '/pokemons/':
                return PokemonsPage;

            case '/pokemon/':
                return PokemonPage;

            default:
                return NotFoundPage;
        }
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
        const { router } = this.props;
        const MathcedRoute = this.route;

        return (
            <App>
                <MathcedRoute {...this.props} router={router} />
            </App>
        );
    }
}

export default connect(
    Router.mapStateToProps,
    Router.mapDispatchToProps,
)(Router);
