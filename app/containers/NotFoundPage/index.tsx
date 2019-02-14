import React, { Fragment, PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import PageTitle from '@Components/PageTitle';
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

                <PageTitle>
                    404. Page not found.
                </PageTitle>
            </Fragment>
        );
    }
}
