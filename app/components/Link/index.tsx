import React, { FC, ReactNode, memo } from 'react';

import { Container } from './UIComponents';

export interface PropsType {
    children?: ReactNode,
    href?: string,
    to?: string,
}

const Link: FC<PropsType> = ({ children, ...props }) => (
    <Container {...props}>
        {children}
    </Container>
);

Link.defaultProps = {
    children: null,
    href: undefined,
    to: undefined,
};

export default memo(Link);
