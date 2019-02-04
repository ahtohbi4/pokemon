import React, { FC, memo } from 'react';

import { Container } from './UIComponents';

interface PropsType {}

const Footer: FC<PropsType> = () => (
    <Container>
        2019
    </Container>
);

export default memo(Footer);
