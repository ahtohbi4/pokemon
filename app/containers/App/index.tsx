import React, { Fragment, PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '@Components/ErrorBoundary';

import { GlobalStyle, theme } from './UIComponents';

export default class App extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <Fragment>
                    <GlobalStyle />

                    <ErrorBoundary>
                        <main>
                            {children}
                        </main>
                    </ErrorBoundary>
                </Fragment>
            </ThemeProvider>
        );
    }
}
