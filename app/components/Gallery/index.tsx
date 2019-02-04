import React, { FC, memo } from 'react';

import Title from '@Components/Title';

import Pictures from './components/Pictures';

import { PicturesListType } from './types';
import { Container } from './UIComponents';

interface PropsType {
    pictures: PicturesListType,
}

export * from './types';

const Gallery: FC<PropsType> = ({ pictures }) => (
    <Container>
        <Title tagName="h2">
            Gallery
        </Title>

        <Pictures pictures={pictures} />
    </Container>
);

export default memo(Gallery);
