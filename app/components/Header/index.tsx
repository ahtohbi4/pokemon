import React, { FC, memo } from 'react';

import { Container } from './UIComponents';

interface PropsTypes {}

const Header: FC<PropsTypes> = () => (
    <Container />
);

export default memo(Header);
