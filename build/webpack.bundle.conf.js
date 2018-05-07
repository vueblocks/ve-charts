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

const env = require('../config/prod.env')

baseWebpackConfig.entry = {
  VeCharts: './src/index.js',
  VeBarChart: './src/packages/bar/index.js',
  VeDonutChart: './src/packages/donut/index.js',
  VeFunnelChart: './src/packages/funnel/index.js',
  VeGaugeChart: './src/packages/gauge/index.js',
  VeLineChart: './src/packages/line/index.js',
  VePieChart: './src/packages/pie/index.js',
  VeRadarChart: './src/packages/radar/index.js',
  VeScatterChart: './src/packages/scatter/index.js'
}

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
    filename: '[name].min.js',
    library: 've-charts',
    libraryTarget: 'umd',
  },
  externals: [
    {
      vue: 'vue',
    },
    /^echarts/
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
      minChunks: 3
    })
  ]
})

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
