import React, { Fragment, PureComponent } from 'react';

import Title from '@Components/Title';

export default class NotFoundPage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Title>
                    404. Page not found.
                </Title>
            </Fragment>
        );
    }
}
