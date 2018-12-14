import React, { memo } from 'react';

import { Container } from './UIComponents';

const Title = ({ children, level }) => (
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
