import { PwaMetaHeader } from '@multiverse/src/components/seo/pwa-headers';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <PwaMetaHeader />
      </Head>
      <body className="select-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
