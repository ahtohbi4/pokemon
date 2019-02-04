import React, { Fragment, PureComponent } from 'react';

import {
    DEFAULT_THEME,
    ThemeProvider,
} from '@Utils/styled';

import { GlobalStyle } from './UIComponents';

interface PropsType {}

export default class Theme extends PureComponent<PropsType> {
    render() {
        const { children } = this.props;

        return (
            <ThemeProvider theme={DEFAULT_THEME}>
                <Fragment>
                    <GlobalStyle />

                    {children}
                </Fragment>
            </ThemeProvider>
        );
    }
}
