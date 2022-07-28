import { ReactQueryProvider } from '@multiverse/src/providers/react-query';
import { AppProps } from 'next/app';
import '~styles/tailwind.css';

function MultiverseApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider state={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </ReactQueryProvider>
  );
}

export default MultiverseApp;
