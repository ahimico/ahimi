import type {
  GetPagePropertyResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { notion } from '~configs';

export type NotionPage = Extract<
  QueryDatabaseResponse['results'][number],
  { properties: unknown }
>;

export const propertyRetriever = (page: NotionPage) => {
  const properties = Promise.all(
    Object.values(page.properties).map(property =>
      notion.pages.properties.retrieve({
        page_id: page.id,
        property_id: property.id,
      }),
    ),
  );
  return properties;
};

export const propertySelector = (properties: GetPagePropertyResponse[]) => {
  const lensedProperties = properties.map(property => {
    if (property.type === 'select') return property.select.name;
    if (property.type === 'number') return property.number;
    if (property.type === 'url') return property.url;
    if (property.type === 'property_item') {
      const propertyItem = property.results[0];
      if (propertyItem.type === 'title') return propertyItem.title.plain_text;
      if (propertyItem.type === 'rich_text')
        return propertyItem.rich_text.plain_text;
    }
    return property;
  });

  return lensedProperties;
};

export const commonPropertySelector = (page: NotionPage) => {
  type PageCover = Extract<NotionPage['cover'], { type: 'external' }>;
  type PageIcon = Extract<NotionPage['icon'], { type: 'emoji' }>;
  return {
    url: (page.cover as PageCover).external.url,
    icon: (page.icon as PageIcon).emoji,
  };
};
