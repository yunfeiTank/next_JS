import App from 'next/app';
import React from 'react';
import Header from '../components/Header';
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return <div>
            <Provider store={reduxStore}>
                <Header />
                <Component {...pageProps} />
            </Provider>
        </div>
    }
}
export default withReduxStore(MyApp)