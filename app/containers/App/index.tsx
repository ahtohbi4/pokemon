import React, { createContext, Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as actions from './actions';
import selectApp from './selectors';

import ErrorBoundary from '@Components/ErrorBoundary';
import Footer from '@Components/Footer';
import Header from '@Components/Header';
import PageBody from '@Components/PageBody';

import { GlobalStyle } from './UIComponents';

interface PropsType {
    resetHeaderColor: actions.ResetHeaderColorActionCreatorType;
    setHeaderColor: actions.SetHeaderColorActionCreatorType;

    headerColor?: string;
}

export const AppContext = createContext({});

class App extends PureComponent<PropsType> {
    static defaultProps = {
        headerColor: undefined,
    };

    static mapStateToProps = selectApp;

    static mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

    render() {
        const { children, headerColor, resetHeaderColor, setHeaderColor } = this.props;

        return (
            <Fragment>
                <GlobalStyle />

                <Header color={headerColor} />

                <PageBody>
                    <ErrorBoundary>
                        <AppContext.Provider value={{
                            resetHeaderColor,
                            setHeaderColor,
                        }}>
                            {children}
                        </AppContext.Provider>
                    </ErrorBoundary>
                </PageBody>

                <Footer />
            </Fragment>
        );
    }
}

export default connect(
    App.mapStateToProps,
    App.mapDispatchToProps,
)(App);
