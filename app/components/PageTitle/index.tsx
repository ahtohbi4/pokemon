import React, { FC, memo, ReactNode } from 'react';

import { Container } from './UIComponents';

export interface PropsType {
    children: ReactNode;
}

const PageTitle: FC<PropsType> = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default memo(PageTitle);
