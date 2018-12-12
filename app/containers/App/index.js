import React, { PureComponent } from 'react';

export default class App extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <main>
                {children}
            </main>
        );
    }
}
