'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const components = require('../src/components')

const env = require('../config/prod.env')

const isFully = process.env.PACK_MODE === 'fully'

const webpackEntry = isFully
  ? { 've-charts.min': './src/index.js' } // 权量引入
  : { ...components } // 按需引入

baseWebpackConfig.entry = webpackEntry

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.bundle.productionSourceMap,
      extract: true
    })
  },
  devtool: config.bundle.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.bundle.assetsRoot,
    publicPath: config.bundle.assetsPublicRoot,
    filename: '[name].js',
    library: 've-charts',
    libraryTarget: 'umd',
  },
  externals: [
    {
      vue: 'vue',
    },
    function (context, request, callback) {
      if (/^echarts|^zrender/.test(request)) {
        if (isFully) {
          // console.log(request)
          return callback(null, 'echarts')
        } else {
          return callback(null, request)
        }
      }
      callback()
    }
  ],
  plugins: [
    new LodashModuleReplacementPlugin(),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_console: true
        }
      },
      sourceMap: config.bundle.productionSourceMap,
      parallel: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 've-charts.min.css'
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: "common.js",
      minChunks: Object.keys(components).length,
      chunks: Object.keys(components)
    })
  ]
})

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
