import React, { Fragment, PureComponent } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { convertToTitle } from '@Utils/formatString';

import * as actions from './actions';
import selectPokemonPage from './selectors';
import {
    PokemonRequestType,
    SpeciesListRequestType,
} from './types';

import Title from '@Components/Title';

import Pokemon from './components/Pokemon';

import { RouterType } from '@Containers/Router/types';

interface PokemonPageProps {
    pokemon: PokemonRequestType,
    router: RouterType,
    species: SpeciesListRequestType,

    getPokemon: (id: string) => void;
    resetPokemon: () => void;
}

class PokemonPage extends PureComponent<PokemonPageProps> {
    static mapStateToProps = selectPokemonPage;

    static mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

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
