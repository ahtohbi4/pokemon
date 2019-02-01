import React, { memo } from 'react';

import Title from '@Components/Title';

import Pictures from './components/Pictures';

import { PicturesList } from './types';
import { Container } from './UIComponents';

interface GalleryProps {
    pictures: PicturesList,
}

const Gallery = ({ pictures }: GalleryProps) => (
    <Container>
        <Title tagName="h2">
            Gallery
        </Title>

        <Pictures pictures={pictures} />
    </Container>
);

export default memo(Gallery);
