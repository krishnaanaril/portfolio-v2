import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>        
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=1, viewport-fit=cover'/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
