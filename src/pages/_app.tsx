import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Global } from '@emotion/react';

import { CommonProvider } from '@context/common';

import Header from '@components/Header';
import Footer from '@components/Footer';

import { typography } from '@scripts/theme';

const App = ({ Component, pageProps }: AppProps) => (
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
          body: {
            ...typography.txtMd,
          },
          a: {
            textDecoration: 'none',
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
        <meta name="description" content="Коллегия адвокатов Барщевский и партнеры" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/pt-sans-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/pt-sans-italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/pt-sans-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/pt-serif-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CommonProvider>
  </>
);

export default App;
