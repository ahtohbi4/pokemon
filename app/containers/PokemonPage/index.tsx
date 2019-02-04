import React, { Fragment, PureComponent } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { InjectRouterPropsType } from '@Containers/Router';
import { convertToTitle } from '@Utils/formatString';

import * as actions from './actions';
import selectPokemonPage from './selectors';
import {
    PokemonRequestType,
    SpeciesRequestType,
} from './types';

import Title from '@Components/Title';
import Link from '@Components/Link';

import Pokemon from './components/Pokemon';

interface PropsType extends InjectRouterPropsType {
    pokemon: PokemonRequestType,
    species: SpeciesRequestType,

    getPokemon: (id: string) => void;
    resetPokemon: () => void;
}

class PokemonPage extends PureComponent<PropsType> {
    static mapStateToProps = selectPokemonPage;

    static mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

    private get id(): string {
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
                    <Link to="asdasd">All pokemons</Link>
                </p>
            </Fragment>
        );
    }
}

export default connect(
    PokemonPage.mapStateToProps,
    PokemonPage.mapDispatchToProps,
)(PokemonPage);
