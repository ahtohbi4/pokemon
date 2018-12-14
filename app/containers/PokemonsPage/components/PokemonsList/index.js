import React from 'react';

import Loader from '@components/Loader';

import {
    Container,
    Item,
    List,
} from './UIComponents';

const PokemonsList = ({ pokemons: { data, error, isLoading } }) => {
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
