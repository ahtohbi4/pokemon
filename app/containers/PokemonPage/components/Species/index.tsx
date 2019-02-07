import React, { FC, memo } from 'react';

import { SpeciesResponseType } from '../../types';

import Loader from '@Components/Loader';
import Title from '@Components/Title';

import { Name } from './UIComponents';

interface PropsType {
    species: SpeciesResponseType,
}

const Species: FC<PropsType> = ({ species }) => {
    const { data, error, isLoading } = species;

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

    const { color: { name: color }, name } = data;

    return (
        <div>
            <Title tagName="h2">
                Species
            </Title>

            <Name color={color}>
                {name}
            </Name>
        </div>
    );
};

export default memo(Species);
