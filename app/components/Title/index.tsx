import React, { FC, memo, ReactNode } from 'react';

import { Container } from './UIComponents';

export interface PropsType {
    children: ReactNode;

    tagName?: string;
}

const Title: FC<PropsType> = ({ children, tagName }) => (
    <Container tagName={tagName}>
        {children}
    </Container>
);

Title.defaultProps = {
    tagName: 'h1',
};

export default memo(Title);
