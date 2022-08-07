import { Client } from '@notionhq/client';

const NOTION_TOKEN = process.env['NOTION_TOKEN'];
export const notion = new Client({ auth: NOTION_TOKEN });

// TODO: add notion.so base api v3 for raw page retrieve
// export const notion_axios = axios.create({
//   baseURL: 'https://api.notion.com',
//   headers: {
//     Authorization: `Bearer ${NOTION_TOKEN}`,
//     'Notion-Version': Client.defaultNotionVersion,
//   },
// });
