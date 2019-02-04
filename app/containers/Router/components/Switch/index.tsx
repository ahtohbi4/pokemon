import { Children, Component, ReactElement } from 'react';

import Redirect, { PropsType as RedirectPropsType } from '../Redirect';
import Route, { PropsType as RoutePropsType } from '../Route';
import RouterContext from '../RouterContext';

interface PropsType {}

interface ChildPropsType extends RedirectPropsType, RoutePropsType {}

// It should be extended from Component to correct working of context.
export default class Switch extends Component<PropsType> {
    static contextType = RouterContext;

    render() {
        const { router: { location: { pathname } } } = this.context;
        const { children } = this.props;

        return Children.toArray(children)
            .find((params) => {
                const {props: {from, path}, type} = params as ReactElement<ChildPropsType>;

                return (
                    (type === Redirect && from === pathname) ||
                    (type === Route && (path === pathname || path === '*'))
                );
            });
    }
}
