import React, { FC, memo } from 'react';

import {
    Container,
    Dot,
    Icon,
} from './UIComponents';

interface PropsType {}

const Loader: FC<PropsType> = () => (
    <Container>
        <Icon>
            <Dot />
            <Dot />
            <Dot />
        </Icon>
    </Container>
);

export default memo(Loader);
