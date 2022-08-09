const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
