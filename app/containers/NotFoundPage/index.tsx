import React, { Fragment, PureComponent } from 'react';

import { InjectRouterPropsType } from '@Containers/Router';
import Title from '@Components/Title';

interface PropsType extends InjectRouterPropsType {}

export default class NotFoundPage extends PureComponent<PropsType> {
    render() {qq
        return (
            <Fragment>
                <Title>
                    404. Page not found.
                </Title>
            </Fragment>
        );
    }
}
