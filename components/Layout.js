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
                <link href={`https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Oswald:wght@300;400;500;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet`} />


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
