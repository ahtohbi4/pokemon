import React, { Fragment, PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './UIComponents';

export default class App extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <Fragment>
                    <GlobalStyle />

                    <main>
                        {children}
                    </main>
                </Fragment>
            </ThemeProvider>
        );
    }
}
