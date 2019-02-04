import React, { Fragment, PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import { InjectRouterPropsType } from '@Containers/Router';
import Title from '@Components/Title';

interface PropsType extends InjectRouterPropsType {}

export default class NotFoundPage extends PureComponent<PropsType> {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>
                        404. Page not found.
                    </title>
                </Helmet>

                <Title>
                    404. Page not found.
                </Title>
            </Fragment>
        );
    }
}
