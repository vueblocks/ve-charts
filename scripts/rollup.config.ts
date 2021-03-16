/* eslint-disable @typescript-eslint/no-explicit-any */
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'
import filesize from 'rollup-plugin-filesize'

import pkg from '../package.json'

interface Output {
  format: string;
  name: string;
  isMinify: boolean;
  display?: string;
  globals?: object;
  plugins?: Array<any>;
}

const configs = []

const createOutputs = (arg: Output) => {
  const {
    format,
    name,
    isMinify,
    globals = {},
    plugins = []
  } = arg

  let umdSettings = {}

  if (format === 'umd') {
    umdSettings = {
      globals: {
        'vue-demi': 'VueDemi',
        ...globals
      },
      name: 'VeCharts'
    }
  }

  const fileType = isMinify ? format + '.min' : format === 'es' ? 'esm' : format

  const makeBanner = (name: string) => {
    return `/*!
 * @vueblocks/${name} v${pkg.version}
 * (c) ${new Date().getFullYear()} xiaoluoboding
 * @license MIT
 */`
  }

  return {
    banner: makeBanner(name),
    file: `lib/index.${fileType}.js`,
    format,
    ...umdSettings,
    plugins,
    globals: {
      'vue-demi': 'vue-demi',
      echarts: 'echarts',
      'echarts/core': 'echarts',
      'lodash.clonedeep': 'lodash.clonedeep',
      '@vueblocks/vue-use-core': 'VueUseCore'
    }
  }
}

const minifyPlugins = [
  terser({
    format: {
      comments: false
    },
    compress: {
      drop_console: true
    }
  })
]

// build lib cjs/esm/umd/umd.min js
const configMap = [
  { format: 'cjs', name: 've-charts', isMinify: false },
  { format: 'es', name: 've-charts', isMinify: false },
  { format: 'umd', name: 've-charts', isMinify: false, display: 'VeCharts' },
  { format: 'umd', name: 've-charts', isMinify: true, display: 'VeCharts', plugins: minifyPlugins }
]

function createEntry (config) {
  return {
    input: 'src/index.ts',
    output: [
      createOutputs(config)
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false
          }
        }
      }),
      replace({
        preventAssignment: true,
        __DEV__: config.format !== 'umd'
          ? '(process.env.NODE_ENV !== "production")'
          : config.isMinify ? 'false' : 'true'
      }),
      filesize()
    ],
    external: [
      'vue-demi',
      'lodash.clonedeep',
      'echarts/core',
      'echarts/charts',
      'echarts/components',
      'echarts/renderers',
      '@vueblocks/vue-use-core'
    ]
  }
}

configMap.map((c) => configs.push(createEntry(c)))

// build lib d.ts
configs.push({
  input: 'src/index.ts',
  output: {
    file: 'lib/index.d.ts',
    format: 'es'
  },
  plugins: [
    dts()
  ]
})

export default configs
