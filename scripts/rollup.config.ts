/* eslint-disable @typescript-eslint/no-explicit-any */
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'
import filesize from 'rollup-plugin-filesize'

import pkg from '../package.json'
import { activePackages } from './packages'

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
    display,
    globals = {},
    plugins = []
  } = arg

  let umdSettings = {}

  if (format === 'umd') {
    umdSettings = {
      globals: {
        'vue-demi': 'VueDemi',
        'lodash.clonedeep': 'CloneDeep',
        '@vueblocks/vue-use-core': 'VueUseCore',
        ...globals
      },
      name: display
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
    file: `packages/${name}/lib/index.${fileType}.js`,
    format,
    exports: 'default',
    plugins,
    ...umdSettings
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

const createConfig = (name, display, external = [], globals = {}) => {
  // build lib cjs/esm/umd/umd.min js
  const configMap = [
    { format: 'cjs', name, isMinify: false },
    { format: 'es', name, isMinify: false },
    { format: 'umd', name, isMinify: false, display, globals, },
    { format: 'umd', name, isMinify: true, display, globals, plugins: minifyPlugins }
  ]

  function createEntry (config) {
    return {
      input: `packages/${name}/index.ts`,
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
        '@vueblocks/vue-use-core',
        ...external
      ]
    }
  }

  configMap.map((c) => configs.push(createEntry(c)))

  // build lib d.ts
  configs.push({
    input: `packages/${name}/index.ts`,
    output: {
      file: `packages/${name}/lib/index.d.ts`,
      format: 'es'
    },
    plugins: [
      dts()
    ]
  })
}

for(const {name, display, external = [], globals = {}} of activePackages) {
  createConfig(name, display, external, globals)
}

export default configs
