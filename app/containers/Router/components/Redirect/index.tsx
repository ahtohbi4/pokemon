import { PureComponent } from 'react';

export interface PropsType {
    from: string;
    to: string;
}

export default class Redirect extends PureComponent<PropsType> {
    constructor(props: PropsType) {
        super(props);

        const { to } = this.props;

        window.location.hash = `!${to}`;
    }

    render() {
        return null;
    }
}
