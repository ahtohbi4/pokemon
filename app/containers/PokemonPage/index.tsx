import React, { Fragment, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { convertToTitle } from '@Utils/formatString';

import * as actions from './actions';
import selectPokemonPage from './selectors';

import Title from '@Components/Title';

import Pokemon from './components/Pokemon';

class PokemonPage extends PureComponent {
    static mapStateToProps = selectPokemonPage;

    static mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

    get id(): string {
        const { router: { location: { query: { id } } } } = this.props;

        return id;
    }

    componentDidMount() {
        const { getPokemon } = this.props;

        getPokemon(this.id);
    }

    componentWillUnmount() {
        const { resetPokemon } = this.props;

        resetPokemon();
    }

    render() {
        const { pokemon, species } = this.props;

        return (
            <Fragment>
                <Title>
                    {convertToTitle(this.id)}
                </Title>

                <Pokemon
                    pokemon={pokemon}
                    species={species}
                />

                <p>
                    <a href="#!/">All pokemons</a>
                </p>
            </Fragment>
        );
    }
}

export default connect(
    PokemonPage.mapStateToProps,
    PokemonPage.mapDispatchToProps,
)(PokemonPage);
