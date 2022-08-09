import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { JSONTree } from 'react-json-tree';
import { notion } from '~configs';

export default function Arts(props) {
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
  const pageId = 'cecd96b0258f41c4b2587e792e89e3d9';
  const comments = await notion.comments.list({ block_id: pageId });
  const blocks = await Promise.all(
    comments.results
      .map(comment => comment.rich_text[0].plain_text.split('#').pop())
      .map(blockId => notion.blocks.retrieve({ block_id: blockId })),
  );

  return { props: { comments, blocks } };
};
