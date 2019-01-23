import React, { Component, ReactChildren } from 'react';

import RouterContext from '../RouterContext';

interface RoutePropsType {
    component: ReactChildren,
    path: string,
}

// It should be extended from Component to correct working of context.
export default class Route extends Component<RoutePropsType> {
    static contextType = RouterContext;

    render() {
        const { router } = this.context;
        const { component: Component, ...props } = this.props;

        return (
            <Component {...props} router={router} />
        );
    }
}
