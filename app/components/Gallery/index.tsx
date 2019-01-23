import React, { memo } from 'react';

import Title from '@Components/Title';

import Pictures from './components/Pictures';

import { PicturesListType } from './types';
import { Container } from './UIComponents';

interface GalleryPropsType {
    pictures: PicturesListType,
}

const Gallery = ({ pictures }: GalleryPropsType) => (
    <Container>
        <Title level={2}>
            Gallery
        </Title>

        <Pictures pictures={pictures} />
    </Container>
);

export default memo(Gallery);
