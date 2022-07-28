import { ReactQueryProvider } from '@multiverse/src/providers';
import { NextPageWithLayout } from '@multiverse/src/types';
import { AppProps } from 'next/app';
import '~styles/tailwind.css';

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
