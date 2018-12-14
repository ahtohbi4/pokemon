import React, { memo } from 'react';

import Title from '@components/Title';

import Pictures from './components/Pictures';

import { Container } from './UIComponents';

const Gallery = ({ pictures }) => (
    <Container>
        <Title level={2}>
            Gallery
        </Title>

        <Pictures pictures={pictures} />
    </Container>
);

export default memo(Gallery);
