import { Children, Component } from 'react';

import Redirect from '../Redirect';
import Route from '../Route';
import RouterContext from '../RouterContext';

interface SwitchPropsType {
}

// It should be extended from Component to correct working of context.
export default class Switch extends Component<SwitchPropsType> {
    static contextType = RouterContext;

    render() {
        const { router: { location: { pathname } } } = this.context;
        const { children } = this.props;

        return Children.toArray(children)
            .find(({ props: { from, path }, type }) => (
                (type === Redirect && from === pathname) ||
                (type === Route && (path === pathname || path === '*'))
            ));
    }
}