import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import Header from './Header/Header';

Router.onRouteChangeStart = url => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                ></meta>
                <title>Prevenance HS</title>
            </Head>
            <Header />
            {children}

            <script
                src='https://kit.fontawesome.com/8640556483.js'
                crossOrigin='anonymous'
            ></script>
        </React.Fragment>
    );
};

export default Layout;
