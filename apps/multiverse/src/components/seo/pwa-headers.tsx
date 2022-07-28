import { BRAND_COLOR } from '@multiverse/src/constants';
import { favicon } from '@multiverse/src/misc/favicon';

export function PwaMetaHeader() {
  return (
    <>
      <link rel="icon" href={favicon} />
      {/* Safari header color */}
      <meta content={BRAND_COLOR} name="theme-color" />
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}
