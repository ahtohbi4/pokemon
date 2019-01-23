import { PureComponent } from 'react';

interface RedirectPropsType {
    from: string,
    to: string,
}

export default class Redirect extends PureComponent<RedirectPropsType> {
    constructor(props: RedirectPropsType) {
        super(props);

        const { to } = this.props;

        window.location.hash = `!${to}`;
    }

    render() {
        return null;
    }
}
