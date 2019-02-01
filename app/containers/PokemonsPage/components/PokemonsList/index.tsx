import React, { FC } from 'react';

import { PokemonsListRequestType } from '../../types';

import Loader from '@Components/Loader';

import {
    Container,
    Item,
    List,
} from './UIComponents';

interface PokemonsListPropsType {
    pokemons: PokemonsListRequestType,
}

const PokemonsList: FC<PokemonsListPropsType> = ({ pokemons: { data, error, isLoading } }) => {
    if (isLoading) {
        return (
            <Container>
                <Loader />
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                {error}
            </Container>
        );
    }

    if (!data) {
        return null;
    }

    return (
        <List>
            {data.map(({ name }) => (
                <Item key={name}>
                    <a href={`#!/pokemon/?id=${name}`}>
                        {name}
                    </a>
                </Item>
            ))}
        </List>
    );
};

export default PokemonsList;
