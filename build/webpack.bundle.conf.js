'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const env = process.env.NODE_ENV === 'testing' ?
  require('../config/test.env') :
  config.bundle.env

baseWebpackConfig.entry = {
  'VeCharts': './src/index.js'
}

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.bundle.productionSourceMap,
      extract: true
    })
  },
  devtool: config.bundle.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.bundle.assetsRoot,
    publicPath: config.bundle.assetsPublicRoot,
    filename: 've-charts.min.js',
    library: 'VeCharts',
    libraryTarget: 'umd',
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // UglifyJs do not support ES6+, you can also use babel-minify for better treeshaking: https://github.com/babel/minify
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 've-charts.min.css'
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
})

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
