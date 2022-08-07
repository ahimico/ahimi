import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { JSONTree } from 'react-json-tree';
import { notion } from '~configs';

export default function Movies(props) {
  return (
    <>
      <Head>
        <title>My Multiverse</title>
      </Head>
      <main>
        <JSONTree data={props} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageId = 'ad89c55ac4734194892d06a290d1036b';
  const movies = await notion.pages.retrieve({ page_id: pageId });
  const movieAsBlock = await notion.blocks.children.list({ block_id: pageId });
  // first block id has been retrieved from the list method
  // want to watch cols
  const wantToWatchCol = await notion.blocks.children.list({
    block_id: '9e47a353-abf4-48e9-9260-12420168e25a',
  });
  const firstColBlocks = await notion.blocks.children.list({
    block_id: 'e4c9fceb-6455-4bd8-a32d-9abbfecb25a7',
  });

  const firstBookmarkBlock = await notion.blocks.retrieve({
    block_id: '2398f948-4bd2-4336-91fd-b11e81cbfd86',
  });
  return {
    props: {
      movies,
      movieAsBlock,
      wantToWatchCol,
      firstColBlocks,
      firstBookmarkBlock,
    },
  };
};
