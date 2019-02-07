import React, { Fragment, PureComponent } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { InjectRouterPropsType } from '@Containers/Router';
import { convertToTitle } from '@Utils/formatString';

import * as actions from './actions';
import selectPokemonPage from './selectors';
import {
    PokemonResponseType,
    SpeciesResponseType,
} from './types';

import Title from '@Components/Title';
import Link from '@Components/Link';

import Pokemon from './components/Pokemon';

interface PropsType extends InjectRouterPropsType {
    pokemon: PokemonResponseType,
    species: SpeciesResponseType,

    getPokemonRequest: typeof actions.getPokemonRequest,
    resetPokemon: typeof actions.resetPokemon,
}

class PokemonPage extends PureComponent<PropsType> {
    static mapStateToProps = selectPokemonPage;

    static mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

    private get id(): string {
        const { router: { location: { query: { id } } } } = this.props;

        return id;
    }

    private get name(): string {
        return convertToTitle(this.id);
    }

    componentDidMount() {
        const { getPokemonRequest } = this.props;

        getPokemonRequest(this.id);
    }

    componentWillUnmount() {
        const { resetPokemon } = this.props;

        resetPokemon();
    }

    render() {
        const { pokemon, species } = this.props;

        return (
            <Fragment>
                <Helmet>
                    <title>
                        {`Pokemon ${this.name} page.`}
                    </title>
                </Helmet>

                <Title>
                    {this.name}
                </Title>

                <Pokemon
                    pokemon={pokemon}
                    species={species}
                />

                <p>
                    <Link to="/pokemons/">All pokemons</Link>
                </p>
            </Fragment>
        );
    }
}

export default connect(
    PokemonPage.mapStateToProps,
    PokemonPage.mapDispatchToProps,
)(PokemonPage);
