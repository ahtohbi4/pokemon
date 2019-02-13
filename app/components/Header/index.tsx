import React, { FC, memo } from 'react';

import { Container } from './UIComponents';

interface PropsTypes {
    color?: string,
}

const Header: FC<PropsTypes> = ({ color }) => (
    <Container color={color} />
);

export default memo(Header);
