import React, { memo } from 'react';

import Loader from '@Components/Loader';
import Title from '@Components/Title';

import { Name } from './UIComponents';

const Species = ({ species }) => {
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
            <Title level={2}>
                Species
            </Title>

            <Name color={color}>
                {name}
            </Name>
        </div>
    );
};

export default memo(Species);
