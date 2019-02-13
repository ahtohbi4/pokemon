import React, { Fragment, PureComponent, createContext } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import selectApp from './selectors';

import ErrorBoundary from '@Components/ErrorBoundary';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import PageBody from '@Components/PageBody';

import { GlobalStyle } from './UIComponents';

interface PropsType {
    resetHeaderColor: actions.ResetHeaderColorActionCreatorType,
    setHeaderColor: actions.SetHeaderColorActionCreatorType,

    headerColor?: string,
}

export const AppContext = createContext({});

class App extends PureComponent<PropsType> {
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
                            setHeaderColor,
                            resetHeaderColor,
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
