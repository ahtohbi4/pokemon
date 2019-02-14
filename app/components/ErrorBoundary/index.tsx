import React, { Children, PureComponent } from 'react';

import PageTitle from '@Components/PageTitle';

interface PropsType {}

interface StateType {
    hasError: boolean;
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
                <PageTitle>
                    Something went wrong.
                </PageTitle>
            );
        }

        return Children.only(children);
    }
}
