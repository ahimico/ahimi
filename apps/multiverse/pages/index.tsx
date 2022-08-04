import { DescriptiveCategory } from '@multiverse/src/components/descriptive-category';
import Head from 'next/head';

export function Public() {
  return (
    <>
      <Head>
        <title>My Multiverse</title>
      </Head>
      <main>
        <DescriptiveCategory />
      </main>
    </>
  );
}

export default Public;
