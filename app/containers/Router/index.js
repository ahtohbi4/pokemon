import React, { Fragment, PureComponent } from 'react';

import App from '@containers/App';

import NotFoundPage from '@containers/NotFoundPage';
import PokemonPage from '@containers/PokemonPage';
import PokemonsPage from '@containers/PokemonsPage';

const { location: { hash: initialHash } } = window;

export default class Router extends PureComponent {
    static parseHash(hash) {
        return hash
            .replace(/^#/, '')
            .split('&')
            .filter((pair) => (pair !== ''))
            .reduce((result, pair) => {
                const [key, value] = pair.split('=');

                return {
                    ...result,
                    [key]: (value === undefined) ? true : value,
                };
            }, {});
    }

    constructor(props) {
        super(props);

        this.state = {
            hash: Router.parseHash(initialHash),
        };

        this.hanleHashChange = this.hanleHashChange.bind(this);
    }

    get route() {
        const { hash: { page } } = this.state;

        switch (page) {
            case 'pokemons':
                return PokemonsPage;

            case 'pokemon':
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

        this.setState({ hash: Router.parseHash(hash) });
    }

    render() {
        const { hash: params } = this.state;
        const MathcedRoute = this.route;

        return (
            <App>
                <MathcedRoute {...this.props} router={{ params }} />
            </App>
        );
    }
}
