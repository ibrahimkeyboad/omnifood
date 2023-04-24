import '@/styles/globals.scss';

import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });
export default function App({ Component, pageProps }) {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />
    </main>
  );
}
