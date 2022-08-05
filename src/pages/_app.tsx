import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Global} from '@emotion/react';

import {CommonProvider} from '@context/common';

import Header from '@components/Header';
import Footer from '@components/Footer';

import {colors, typography} from '@scripts/theme';

const App = ({Component, pageProps}: AppProps) => (
    <>
        <Global
            styles={[
                {
                    '*': {
                        boxSizing: 'border-box',
                        margin: 0,
                        padding: 0,
                    },
                    'html, body': {
                        height: '100%',
                    },
                    '#__next': {
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100%',
                    },
                    body: {
                        ...typography.txtMd,
                        color: colors.black,
                    },
                    main: {
                        flex: '1 1 auto',
                    },
                    a: {
                        textDecoration: 'none',
                        color: colors.black,
                    },
                    h1: typography.h1,
                    h2: typography.h2,
                    h3: typography.h3,
                    h4: typography.h4,
                    h5: typography.h5,
                    h6: typography.h6,
                    p: {
                        marginBottom: '25px',
                    },
                    'p:last-of-type': {
                        marginBottom: '0px',
                    },
                    ul: {
                        listStyle: 'none',
                        marginLeft: '5px',
                        marginBottom: '25px',
                    },
                    'ul li:before': {
                        content: '"-"',
                        position: 'relative',
                        left: '-5px',
                    },
                    '.line': {
                        marginTop: '5px',
                        height: '2px',
                        width: '63px',
                        backgroundColor: colors.blue,
                    },
                    '.card-title': {
                        color: colors.gray700,
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'PT Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        src: "url('/fonts/pt-sans-regular.woff2') format('woff2')",
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'PT Sans',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        src: "url('/fonts/pt-sans-italic.woff2') format('woff2')",
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'PT Sans',
                        fontStyle: 'italic',
                        fontWeight: 700,
                        src: "url('/fonts/pt-sans-700italic.woff2') format('woff2')",
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'PT Sans',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        src: "url('/fonts/pt-sans-700.woff2') format('woff2')",
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'PT Serif',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        src: "url('/fonts/pt-serif-700.woff2') format('woff2')",
                    },
                },
            ]}
        />
        <CommonProvider>
            <Head>
                <title>Барщевский и партнеры</title>
                <meta name="description" content="Коллегия адвокатов Барщевский и партнеры"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preload" href="/fonts/pt-sans-regular.woff2" as="font" type="font/woff2"
                      crossOrigin="anonymous"/>
                <link rel="preload" href="/fonts/pt-sans-italic.woff2" as="font" type="font/woff2"
                      crossOrigin="anonymous"/>
                <link rel="preload" href="/fonts/pt-sans-700italic.woff2" as="font" type="font/woff2"
                      crossOrigin="anonymous"/>
                <link rel="preload" href="/fonts/pt-sans-700.woff2" as="font" type="font/woff2"
                      crossOrigin="anonymous"/>
                <link rel="preload" href="/fonts/pt-serif-700.woff2" as="font" type="font/woff2"
                      crossOrigin="anonymous"/>
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </CommonProvider>
    </>
);

export default App;
