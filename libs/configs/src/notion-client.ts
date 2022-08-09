import { Client } from '@notionhq/client';

const NOTION_TOKEN = process.env['NOTION_TOKEN'];
export const notion = new Client({ auth: NOTION_TOKEN });

// TODO: add notion.so base api v3 for raw page retrieve
// export const notion_axios = axios.create({
//   baseURL: 'https://www.notion.so/api/v3',
//   withCredentials: true,
//   headers: {
//     Cookie: `token_v2=${NOTION_TOKEN}`,
//     'notion-client-version': '23.10.25.76',
//     Authorization: `Bearer ${NOTION_TOKEN}`,
//     'Content-Type': 'application/json',
//     'x-notion-active-user-header': '',
//     'Notion-Version': Client.defaultNotionVersion,
//     'User-Agent':
//       'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36',
//   },
// });
