const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const isLib = process.env.VUE_APP_BUILD_MODE === 'lib'
const resolve = dir => path.join(__dirname, dir)

const setChainWebpack = config => {
  config.resolve.alias
    .set('@', path.resolve('app'))
  config.module
    .rule('js')
    .include
    .add('/app')
    .end()
    .use('babel')
    .loader('babel-loader')

  if (isProd) {
    config.performance
      .set('maxEntrypointSize', 2500000)
      .set('maxAssetSize', 2000000)
    // drop console
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
}

const setConfigureWebpack = config => {
  if (isLib) {
    // const externalLibs = [
    //   'vue',
    //   'echarts',
    //   'zrender'
    // ]
    // 将 vue 设置为外部依赖
    // let externals = [
    //   function (context, request, callback) {
    //     for (const lib of externalLibs) {
    //       const reg = new RegExp(`^${lib}`)
    //       if (reg.test(request)) {
    //         return callback(null, lib)
    //       }
    //     }
    //     callback()
    //   }
    // ]
    config.externals = {
      'echarts/lib/echarts': 'echarts',
      'vue': 'vue'
    }
    config.optimization = {
      concatenateModules: true
    }
    config.output = {
      ...config.output,
      library: 'VeCharts',
      libraryExport: 'default'
    }
  }
}

module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: resolve('app/main.js')
    }
  },
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => setChainWebpack(config),
  configureWebpack: config => setConfigureWebpack(config),
  css: {
    extract: false
  },
  devServer: {
    port: 6066,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
