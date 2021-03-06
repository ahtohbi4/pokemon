import React, { Component, ComponentType } from 'react';

import { InjectRouterPropsType } from '../../types';
import RouterContext from '../RouterContext';

export interface PropsType {
    component: ComponentType<InjectRouterPropsType>;
    path: string;
}

// It should be extended from Component to correct working of context.
export default class Route extends Component<PropsType> {
    static contextType = RouterContext;

    render() {
        const { router } = this.context;
        const { component: PageContainer, ...props } = this.props;

        return (
            <PageContainer {...props} router={router} />
        );
    }
}
