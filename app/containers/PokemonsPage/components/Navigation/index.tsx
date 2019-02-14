import React, { PureComponent } from 'react';

import { GetPokemonsRequestActionCreatorType } from '../../actions';
import { StoredPokemonsDataType } from '../../types';

import Button from '@Components/Button';

import { Container } from './UIComponents';

interface PropsType {
    pokemons: StoredPokemonsDataType;

    getPokemons: GetPokemonsRequestActionCreatorType;
}

enum Directions {
    NEXT = 'next',
    PREVIOUS = 'previous',
}

export default class Navigation extends PureComponent<PropsType> {
    private checkDirection(path: Directions): boolean {
        const { pokemons: { data } } = this.props;

        if (data === null) {
            return false;
        }

        const { [path]: direction } = data;

        return (direction !== null);
    }

    private goTo(path: Directions) {
        const { pokemons: { data }, getPokemons } = this.props;

        if (data === null) {
            return;
        }

        const { [path]: direction } = data;

        getPokemons(direction);
    }

    render() {
        return (
            <Container>
                <Button
                    disabled={!this.checkDirection(Directions.PREVIOUS)}

                    onClick={() => this.goTo(Directions.PREVIOUS)}
                >
                    ←
                </Button>

                <Button
                    disabled={!this.checkDirection(Directions.NEXT)}

                    onClick={() => this.goTo(Directions.NEXT)}
                >
                    →
                </Button>
            </Container>
        );
    }
}
