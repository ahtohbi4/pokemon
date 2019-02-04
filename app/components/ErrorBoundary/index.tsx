import React, { Children, PureComponent } from 'react';

import Title from '@Components/Title';

interface PropsType {}

interface StateType {
    hasError: boolean,
}

export default class ErrorBoundary extends PureComponent<PropsType, StateType> {
    readonly state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return (
                <Title>
                    Something went wrong.
                </Title>
            );
        }

        return Children.only(children);
    }
}
