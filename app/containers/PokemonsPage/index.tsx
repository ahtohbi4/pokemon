import React, { Fragment, PureComponent } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { InjectRouterPropsType } from '@Containers/Router';

import * as actions from './actions';
import selectPokemonsPage from './selectors';
import { PokemonsListResponseType } from './types';

import Title from '@Components/Title';

import PokemonsList from './components/PokemonsList';

interface PropsType extends InjectRouterPropsType {
    pokemons: PokemonsListResponseType,

    getPokemonsRequest: typeof actions.getPokemonsRequest,
}

class PokemonsPage extends PureComponent<PropsType> {
    static mapStateToProps = selectPokemonsPage;

    static mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

    componentDidMount() {
        const { pokemons: { data }, getPokemonsRequest } = this.props;

        if (!data) {
            getPokemonsRequest();
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
            </Fragment>
        );
    }
}

export default connect(
    PokemonsPage.mapStateToProps,
    PokemonsPage.mapDispatchToProps,
)(PokemonsPage);
