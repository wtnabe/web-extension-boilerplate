import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'

export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    chromeExtension(),
    simpleReloader(),
    nodeResolve({ browser: true, exportConditions: ['browser'] }),
    commonjs(),
    json()
  ]
}
