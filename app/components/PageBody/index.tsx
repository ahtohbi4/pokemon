import React, { FC, memo } from 'react';

import { Container } from './UIComponents';

interface PropsType {}

const PageBody: FC<PropsType> = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default memo(PageBody);
