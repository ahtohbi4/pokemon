import React, { Fragment, PureComponent } from 'react';

export default class PokemonPage extends PureComponent {
    render() {
        const { router: { params: { id } } } = this.props;

        return (
            <Fragment>
                <h1>Pokemon {id}</h1>

                <p>
                    <a href="#page=pokemons">All pokemons</a>
                </p>
            </Fragment>
        );
    }
}
