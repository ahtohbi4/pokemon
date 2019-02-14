import React, { FC, memo } from 'react';

import { StoredSpeciesDataType } from '../../types';

import Loader from '@Components/Loader';

import { Container } from './UIComponents';

interface PropsType {
    species: StoredSpeciesDataType;
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
        <Container color={color}>
            {name}
        </Container>
    );
};

export default memo(Species);
