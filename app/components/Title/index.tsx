import React, { ReactNode, memo } from 'react';

import { Container } from './UIComponents';

export interface TitlePropsType {
    children: ReactNode,
    tagName: string,
}

const Title = ({ children, tagName }: TitlePropsType) => (
    <Container as={tagName}>
        {children}
    </Container>
);

Title.defaultProps = {
    tagName: 'h1',
};

export default memo(Title);
