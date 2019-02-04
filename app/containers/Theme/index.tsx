import React, { Fragment, PureComponent } from 'react';

import {
    DEFAULT_THEME,
    ThemeProvider,
} from '@Utils/styled';

interface PropsType {}

export default class Theme extends PureComponent<PropsType> {
    render() {
        const { children } = this.props;

        return (
            <ThemeProvider theme={DEFAULT_THEME}>
                <Fragment>
                    {children}
                </Fragment>
            </ThemeProvider>
        );
    }
}
