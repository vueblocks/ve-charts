const path = require('path')

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
