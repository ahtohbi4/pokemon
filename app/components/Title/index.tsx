import React, { ReactNode, memo } from 'react';

import { Container } from './UIComponents';

interface TitleProps {
    children: ReactNode,
    level: number,
}

const Title = ({ children, level }: TitleProps) => (
    <Container
        as={`h${level}`}
        level={level}
    >
        {children}
    </Container>
);

Title.defaultProps = {
    level: 1,
};

export default memo(Title);
