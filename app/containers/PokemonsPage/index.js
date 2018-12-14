import React, { Fragment, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import selectPokemonsPage from './selectors';

import Title from '@components/Title';

import PokemonsList from './components/PokemonsList';

class PokemonsPage extends PureComponent {
    static mapStateToProps = selectPokemonsPage();

    static mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

    componentDidMount() {
        const { pokemons: { data }, getPokemonsList } = this.props;

        if (!data) {
            getPokemonsList();
        }
    }

    render() {
        const { pokemons } = this.props;

        return (
            <Fragment>
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
