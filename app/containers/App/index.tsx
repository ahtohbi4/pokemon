import React, { Fragment, PureComponent } from 'react';

import ErrorBoundary from '@Components/ErrorBoundary';

interface PropsType {}

export default class App extends PureComponent<PropsType> {
    render() {
        const { children } = this.props;

        return (
            <Fragment>
                <main>
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                </main>
            </Fragment>
        );
    }
}
