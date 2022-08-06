import { DescriptiveCategory } from '@multiverse/src/components/descriptive-category';
import {
  commonPropertySelector,
  NotionPage,
  propertyRetriever,
  propertySelector,
} from '@multiverse/src/helpers/notion';
import { domAnimation, LazyMotion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import * as R from 'rambda';
import { notion, NOTION_DATABASE_IDS } from '~configs';

export default function Public({ categories }) {
  return (
    <>
      <Head>
        <title>My Multiverse</title>
      </Head>
      <main>
        <LazyMotion strict features={domAnimation}>
          {categories.map(category => (
            <DescriptiveCategory
              key={category.category}
              isRtl={category.order % 2 === 0}
              {...category}
            />
          ))}
        </LazyMotion>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await notion.databases.query({
    database_id: NOTION_DATABASE_IDS.CATEGORIES,
    sorts: [{ property: 'order', direction: 'ascending' }],
  });
  const categories = await Promise.all(
    results.map(async (page: NotionPage) => {
      const properties = await propertyRetriever(page);
      const lensedProperties = propertySelector(properties);
      return {
        ...commonPropertySelector(page),
        ...Object.fromEntries(
          R.zip(Object.keys(page.properties), lensedProperties),
        ),
      };
    }),
  );

  return { props: { categories }, revalidate: 60 };
};
