import React from 'react';
import App from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="stylesheet" href="/css/homestyle.css"></link>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            as="font"
          />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
