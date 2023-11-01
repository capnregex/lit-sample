import * as esbuild from 'esbuild'
import {sassPlugin} from 'esbuild-sass-plugin'

const context = await esbuild.context({
  entryPoints: ['src/my-element.js'],
  plugins: [sassPlugin({
    type: "lit-css",
  })],
  bundle: true,
  outdir: 'www',
  loader: {
    '.html': 'file'
  },
})

export default context;
