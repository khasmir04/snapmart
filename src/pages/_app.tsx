import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={`${outfit.className} ${outfit.variable} font-outfit`}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
