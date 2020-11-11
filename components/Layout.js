import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import Header from './Header/Header';
import FooterComponent from './Footer/Footer';

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
                <link rel='icon' href='/favicon.ico' />
                <link href={`https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,500&display=swap" rel="stylesheet`} />
                {/** Material Icons */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>

            {/** Header component which print the Menu - shows on all pages */}
            <Header />

            {children}

            {/**  Shows on all pages*/}
            <FooterComponent />

            <script
                src='https://kit.fontawesome.com/8640556483.js'
                crossOrigin='anonymous'
            ></script>
        </React.Fragment>
    );
};

export default Layout;
