import React, { Children, PureComponent } from 'react';

export default class ErrorBoundary extends PureComponent {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <h1>
          Something went wrong.
        </h1>
      );
    }

    return Children.only(children);
  }
}
