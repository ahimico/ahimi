import { BRAND_COLOR } from '../constants';

const encodedSvgUri = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="20" fill="${BRAND_COLOR}"/>
</svg>
`;

/**
 * TODO: Add color mapper for custom favicons
 * @reference https://codepen.io/yoksel/details/MWKeKK
 */
export const favicon = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  encodedSvgUri,
)}`;
