import React, { PureComponent } from 'react';

export default class Redirect extends PureComponent {
    constructor(props) {
        super(props);

        const { to } = this.props;

        window.location.hash = `!${to}`;
    }

    render() {
        return null;
    }
}
