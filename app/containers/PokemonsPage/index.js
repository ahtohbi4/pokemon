import React, { Fragment, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import selectPokemonsPage from './selectors';

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
        const { data } = pokemons;

        if (!data) {
            return null;
        }

        return (
            <Fragment>
                <h1>Pokemons</h1>

                <ul>
                    {data.map(({ name }) => (
                        <li key={name}>
                            <a href={`#page=pokemon&id=${name}`}>
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}

export default connect(
    PokemonsPage.mapStateToProps,
    PokemonsPage.mapDispatchToProps,
)(PokemonsPage);
