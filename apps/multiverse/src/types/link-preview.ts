export interface IMDb {
  url: `https://www.imdb.com/title/tt${number}/`;
  title: string;
  siteName: 'IMDb';
  description: string | undefined;
  mediaType: 'video.tv_show' | 'video.other' | 'website';
  contentType: 'text/html' | undefined;
  images: `https://m.media-amazon.com/images${string}`[];
  videos: {
    url: string | undefined;
    secureUrl: string | null | undefined;
    type: string | null | undefined;
    width: string | undefined;
    height: string | undefined;
  }[];
  favicons: string[];
}
