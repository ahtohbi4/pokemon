import React, { PureComponent } from 'react';

import { getPokemonsRequest } from '../../actions';
import { PokemonsListResponseType } from '../../types';

import Button from '@Components/Button';

import { Container } from './UIComponents';

interface PropsType {
    pokemons: PokemonsListResponseType,

    getPokemonsRequest: typeof getPokemonsRequest,
}

export default class Navigation extends PureComponent<PropsType> {
    constructor(props: PropsType) {
        super(props);

        this.goToNext = this.goToNext.bind(this);
        this.goToPrevious = this.goToPrevious.bind(this);
    }

    get hasPreviousData(): boolean {
        const { pokemons: { data } } = this.props;

        if (data === null) {
            return false;
        }

        const { previous } = data;

        return (previous !== null);
    }

    get hasNextData(): boolean {
        const { pokemons: { data } } = this.props;

        if (data === null) {
            return false;
        }

        const { next } = data;

        return (next !== null);
    }

    goToPrevious() {
        const { pokemons: { data }, getPokemonsRequest } = this.props;

        if (data === null) {
            return;
        }

        const { previous } = data;

        getPokemonsRequest(previous);
    }

    goToNext() {
        const { pokemons: { data }, getPokemonsRequest } = this.props;

        if (data === null) {
            return;
        }

        const { next } = data;

        getPokemonsRequest(next);
    }

    render() {
        return (
            <Container>
                <Button
                    disabled={!this.hasPreviousData}

                    onClick={this.goToPrevious}
                >
                    ←
                </Button>

                <Button
                    disabled={!this.hasNextData}

                    onClick={this.goToNext}
                >
                    →
                </Button>
            </Container>
        )
    }
}
