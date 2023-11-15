import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='img/favicon.png' />
        <link rel='apple-touch-icon' href='img/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
