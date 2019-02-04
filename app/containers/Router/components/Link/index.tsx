import React, { PureComponent, ReactNode } from 'react';

import { URL_PREFIX } from '../../constants';

import { Container } from './UIComponents';

interface PropsType {
    to: string,

    children?: ReactNode,
}

export default class Link extends PureComponent<PropsType> {
    private get url() {
        const { to } = this.props;

        return `${URL_PREFIX}${to}`;
    }

    render() {
        const { children, to, ...props } = this.props;

        return (
            <Container
                {...props}
                href={this.url}
            >
                {children}
            </Container>
        );
    }
}
