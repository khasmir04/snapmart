import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Outfit } from 'next/font/google';
import { Provider } from 'react-redux';

import { store } from '@/store';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <main className={`${outfit.className} ${outfit.variable} font-outfit`}>
      <Component {...pageProps} />
    </main>
  </Provider>
);

export default MyApp;
