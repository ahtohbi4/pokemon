import React, { Component, ComponentType } from 'react';

import RouterContext from '../RouterContext';

export interface PropsType {
    component: ComponentType,
    path: string,
}

// It should be extended from Component to correct working of context.
export default class Route extends Component<PropsType> {
    static contextType = RouterContext;

    render() {
        const { router } = this.context;
        const { component: Component, ...props } = this.props;

        return (
            <Component {...props} router={router} />
        );
    }
}
