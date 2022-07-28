// import { Client } from '@notionhq/client';

// Initializing a client
// const notion = new Client({ auth: process.env.NOTION_TOKEN });
// const databaseId = process.env.NOTION_DATABASE_ID;

export function Index({ response, page }) {
  console.log(`response`, { response, page });
  return (
    <div>
      main
      <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block text-indigo-600">Welcome multiverse 👋</span>
      </div>
    </div>
  );
}

export default Index;

// export async function getServerSideProps(context) {
//   const response = await notion.databases.query({ database_id: databaseId });
//   const pageId = 'ef34276b-ff88-4171-9c92-3d403d81e3ea';
//   const page = await notion.pages.retrieve({ page_id: pageId });
//   return {
//     props: { response, page }, // will be passed to the page component as props
//   };
// }
