import React, { Fragment, PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { InjectRouterPropsType } from '@Containers/Router';

import {
    getPokemonsRequest,
    GetPokemonsRequestActionCreatorType,
} from './actions';
import selectPokemonsPage from './selectors';
import { StoredPokemonsDataType } from './types';

import Title from '@Components/Title';

import Navigation from './components/Navigation';
import PokemonsList from './components/PokemonsList';

interface PropsType extends InjectRouterPropsType {
    pokemons: StoredPokemonsDataType;

    getPokemons: GetPokemonsRequestActionCreatorType;
}

class PokemonsPage extends PureComponent<PropsType> {
    static mapStateToProps = selectPokemonsPage;

    static mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
        getPokemons: getPokemonsRequest,
    }, dispatch)

    componentDidMount() {
        const { pokemons: { data }, getPokemons } = this.props;

        if (!data) {
            getPokemons();
        }
    }

    render() {
        const { pokemons } = this.props;

        return (
            <Fragment>
                <Helmet>
                    <title>
                        Pokemons list.
                    </title>
                </Helmet>

                <Title>
                    Pokemons
                </Title>

                <PokemonsList pokemons={pokemons} />

                <Navigation {...this.props} />
            </Fragment>
        );
    }
}

export default connect(
    PokemonsPage.mapStateToProps,
    PokemonsPage.mapDispatchToProps,
)(PokemonsPage);
