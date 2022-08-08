import { IMDbCard } from '@multiverse/src/components/imdb-card/imdb-card';
import { IMDb } from '@multiverse/src/types/link-preview';
import { isFullBlock } from '@notionhq/client';
import { getLinkPreview } from 'link-preview-js';
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
        <IMDbCard movie={props.movie} />
        <IMDbCard movie={props.anotherMovie} />
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

  const BCS = await notion.blocks.retrieve({
    block_id: '6cfe01e040e14e6aad59b28548bf06e8',
  });

  // https://www.imdb.com/video/vi2182791705/?listId=ls053181649&ref_=hm_hp_i_1
  let movie: IMDb = null;
  if (isFullBlock(BCS) && 'bookmark' in BCS) {
    movie = (await getLinkPreview(BCS.bookmark.url)) as IMDb;
    console.log(`movie`, movie, BCS.bookmark.url);
  }

  const anotherMovie = (await getLinkPreview(
    'https://www.imdb.com/title/tt11866324/?ref_=nv_sr_srsg_0',
  )) as IMDb;

  return {
    props: {
      BCS,
      movie,
      anotherMovie,
      movies,
      movieAsBlock,
      wantToWatchCol,
      firstColBlocks,
      firstBookmarkBlock,
    },
  };
};
