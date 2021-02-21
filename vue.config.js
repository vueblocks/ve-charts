const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
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

module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: resolve('app/main.ts')
    }
  },
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => setChainWebpack(config),
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
