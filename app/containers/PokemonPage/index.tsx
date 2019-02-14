import React, { Fragment, PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { InjectRouterPropsType } from '@Containers/Router';
import { convertToTitle } from '@Utils/formatString';

import { AppContext } from '../App';

import * as actions from './actions';
import selectPokemonPage from './selectors';
import {
    StoredPokemonDataType,
    StoredSpeciesDataType,
} from './types';

import Link from '@Components/Link';
import PageTitle from '@Components/PageTitle';

import Pokemon from './components/Pokemon';

interface PropsType extends InjectRouterPropsType {
    pokemon: StoredPokemonDataType;
    species: StoredSpeciesDataType;

    getPokemonRequest: actions.GetPokemonRequestActionCreatorType;
    resetPokemon: actions.ResetPokemonActionCreatorType;
}

class PokemonPage extends PureComponent<PropsType> {
    static contextType = AppContext;

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

                <PageTitle>
                    {this.name}
                </PageTitle>

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
