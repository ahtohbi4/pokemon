import React, { Fragment, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { convertToTitle } from '@utils/formatString';

import * as actions from './actions';
import selectPokemonPage from './selectors';

import Title from '@components/Title';

import Pokemon from './components/Pokemon';

class PokemonPage extends PureComponent {
    static mapStateToProps = selectPokemonPage();

    static mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

    componentDidMount() {
        const { router: { params: { id } }, getPokemon } = this.props;

        getPokemon(id);
    }

    componentWillUnmount() {
        const { resetPokemon } = this.props;

        resetPokemon();
    }

    render() {
        const { pokemon, router: { params: { id } }, species } = this.props;

        return (
            <Fragment>
                <Title>
                    {convertToTitle(id)}
                </Title>

                <Pokemon
                    pokemon={pokemon}
                    species={species}
                />

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
