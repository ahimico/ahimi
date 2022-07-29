import { clientBootstrap } from '@multiverse/src/misc';
import { ReactQueryProvider } from '@multiverse/src/providers';
import { NextPageWithLayout } from '@multiverse/src/types';
import { AppProps } from 'next/app';
import { isServer } from '~configs';
import '~styles/tailwind.css';

if (!isServer) clientBootstrap();

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };
function MultiverseApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return getLayout(
    <ReactQueryProvider state={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </ReactQueryProvider>,
  );
}

export default MultiverseApp;
