import React, { FC, memo } from 'react';

import Pictures from './components/Pictures';

import { PicturesListType } from './types';
import { Container } from './UIComponents';

interface PropsType {
    pictures: PicturesListType;
}

export * from './types';

const Gallery: FC<PropsType> = ({ pictures }) => (
    <Container>
        <Pictures pictures={pictures} />
    </Container>
);

export default memo(Gallery);
