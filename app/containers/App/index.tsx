import React, { Fragment, PureComponent } from 'react';

import ErrorBoundary from '@Components/ErrorBoundary';
import Header from '@Components/Header';

import { GlobalStyle } from './UIComponents';

interface PropsType {}

export default class App extends PureComponent<PropsType> {
    render() {
        const { children } = this.props;

        return (
            <Fragment>
                <GlobalStyle />

                <Header />

                <main>
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                </main>
            </Fragment>
        );
    }
}
