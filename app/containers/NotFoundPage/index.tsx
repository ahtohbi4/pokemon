import React, { Fragment, PureComponent } from 'react';

import Title from '@Components/Title';

interface PropsType {}

export default class NotFoundPage extends PureComponent<PropsType> {
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
