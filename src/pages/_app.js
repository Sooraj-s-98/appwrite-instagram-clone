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
          <title>Appwrite Instagram</title>
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
               <script dangerouslySetInnerHTML={{__html: ` var _mtm = window._mtm = window._mtm || [];
_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.async=true; g.src='https://cdn.matomo.cloud/cloudwaysappsmozilor.matomo.cloud/container_dpa8GPT4.js'; s.parentNode.insertBefore(g,s); `}} />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
