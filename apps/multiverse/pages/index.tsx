import { DescriptiveCategory } from '@multiverse/src/components/descriptive-category';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Head from 'next/head';

export function Public() {
  const query = useQuery(['test'], () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.data);
  });

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
