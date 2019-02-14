import React, { FC, Fragment, memo } from 'react';

import {
    StoredPokemonDataType,
    StoredSpeciesDataType,
} from '../../types';

import Gallery, { PicturesListType } from '@Components/Gallery';
import Loader from '@Components/Loader';

import Species from '../Species';

import { Title } from './UIComponents';

interface PropsType {
    pokemon: StoredPokemonDataType;
    species: StoredSpeciesDataType;
}

const Pokemon: FC<PropsType> = ({ pokemon, species }) => {
    const { data, error, isLoading } = pokemon;

    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (error) {
        return (
            <div>
                {error}
            </div>
        );
    }

    if (!data) {
        return null;
    }

    const { abilities, height, sprites, weight } = data;

    return (
        <Fragment>
            <Title>
                Characteristic
            </Title>

            <div>
                Height: {height}
            </div>

            <div>
                Weight: {weight}
            </div>

            <Title>
                Abilities
            </Title>

            <ul>
                {abilities
                    .slice(0, 5)
                    .map(({ ability: { name }, is_hidden }) => (
                        <li key={name}>
                            {is_hidden ? 'h ' : ''}{name}
                        </li>
                    ))}
            </ul>

            <div>
                <Title>
                    Gallery
                </Title>

                <Gallery
                    pictures={Object.entries(sprites).reduce((result: PicturesListType, [alias, url]) => {
                        if (!url) {
                            return result;
                        }

                        return [
                            ...result,
                            {
                                alias,
                                url,
                            },
                        ];
                    }, [])}
                />
            </div>

            <div>
                <Title>
                    Species
                </Title>

                <Species species={species} />
            </div>
        </Fragment>
    );
};

export default memo(Pokemon);
