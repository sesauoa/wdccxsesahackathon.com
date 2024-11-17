import Head from 'next/head';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WDCC x SESA Hackathon</title>
        <meta name="description" content="NZ's LARGEST tertiary hackathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
