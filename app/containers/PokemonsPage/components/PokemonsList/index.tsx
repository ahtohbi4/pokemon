import React, { FC, memo } from 'react';

import { StoredPokemonsDataType } from '../../types';

import Link from '@Components/Link';
import Loader from '@Components/Loader';

import {
    Container,
    Item,
    List,
} from './UIComponents';

interface PropsType {
    pokemons: StoredPokemonsDataType,
}

const PokemonsList: FC<PropsType> = ({ pokemons: { data, error, isLoading } }) => {
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

    const { results } = data;

    return (
        <List>
            {results.map(({ name }) => (
                <Item key={name}>
                    <Link to={`/pokemon/?id=${name}`}>
                        {name}
                    </Link>
                </Item>
            ))}
        </List>
    );
};

export default memo(PokemonsList);
