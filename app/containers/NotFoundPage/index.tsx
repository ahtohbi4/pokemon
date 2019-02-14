import React, { Fragment, PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import Title from '@Components/Title';
import { InjectRouterPropsType } from '@Containers/Router';

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
