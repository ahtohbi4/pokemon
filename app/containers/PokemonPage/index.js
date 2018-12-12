import React, { Fragment, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import selectPokemonPage from './selectors';

class PokemonPage extends PureComponent {
    static mapStateToProps = selectPokemonPage();

    static mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

    componentDidMount() {
        const { pokemon: { data }, router: { params: { id } }, getPokemon } = this.props;

        if (!data) {
            getPokemon(id);
        }
    }

    render() {
        const { pokemon: { data }, router: { params: { id } } } = this.props;

        if (!data) {
            return null;
        }

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

export default connect(
    PokemonPage.mapStateToProps,
    PokemonPage.mapDispatchToProps,
)(PokemonPage);
