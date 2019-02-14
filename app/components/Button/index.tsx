import React, { FC, memo, ReactNode } from 'react';

import { Types } from './constants';

import { Container } from './UIComponents';

interface PropsType {
    onClick: () => void;

    children?: ReactNode;
    disabled?: boolean;
    type?: Types;
}

export * from './constants';

const Button: FC<PropsType> = ({ children, ...props }) => (
    <Container {...props}>
        {children}
    </Container>
);

Button.defaultProps = {
    children: null,
    disabled: false,
    type: Types.BUTTON,
};

export default memo(Button);
