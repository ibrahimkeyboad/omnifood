import '@/styles/globals.scss';

import { Rubik } from 'next/font/google';
import Head from 'next/head';

const rubik = Rubik({ subsets: ['latin'] });
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='description'
          content="Omnifood is an AI-powered food subscription that will make you eat healthy again, 365 days per year. It's tailored to your personal tastes and nutritional needs."
        />

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/img/favicon.png' />
        <link rel='apple-touch-icon' href='/img/apple-touch-icon.png' />
        <title>Omnifood &mdash; Never cook again!</title>
      </Head>
      <main className={rubik.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
