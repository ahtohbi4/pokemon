import React, { memo } from 'react';

import {
    Container,
    Dot,
    Icon,
} from './UIComponents';

const Loader = () => (
    <Container>
        <Icon>
            <Dot />
            <Dot />
            <Dot />
        </Icon>
    </Container>
);

export default memo(Loader);
