import React, { Component } from 'react';

import RouterContext from '../RouterContext';

// It should be extended from Component to correct working of context.
export default class Route extends Component {
    static contextType = RouterContext;

    render() {
        const { router } = this.context;
        const { component: Component, ...props } = this.props;

        return (
            <Component {...props} router={router} />
        );
    }
}
