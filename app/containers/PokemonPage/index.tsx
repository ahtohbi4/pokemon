import React, { Fragment, PureComponent } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { InjectRouterPropsType } from '@Containers/Router';
import { convertToTitle } from '@Utils/formatString';

import { AppContext } from '../App';

import * as actions from './actions';
import selectPokemonPage from './selectors';
import {
    StoredPokemonDataType,
    StoredSpeciesDataType,
} from './types';

import Title from '@Components/Title';
import Link from '@Components/Link';

import Pokemon from './components/Pokemon';

interface PropsType extends InjectRouterPropsType {
    pokemon: StoredPokemonDataType,
    species: StoredSpeciesDataType,

    getPokemonRequest: actions.GetPokemonRequestActionCreatorType,
    resetPokemon: actions.ResetPokemonActionCreatorType,
}

class PokemonPage extends PureComponent<PropsType> {
    static mapStateToProps = selectPokemonPage;

    static mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

    static contextType = AppContext;

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

    componentDidUpdate() {
        const { species: { data } } = this.props;

        if (!data) {
            return;
        }

        const { setHeaderColor } = this.context;
        const { color: { name: color } } = data;

        setHeaderColor(color);
    }

    componentWillUnmount() {
        const { resetHeaderColor } = this.context;
        const { resetPokemon } = this.props;

        resetHeaderColor();
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
