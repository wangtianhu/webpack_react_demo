const webpackMerge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config');

const utils = require('./utils');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(baseWebpackConfig, {
  // 指定构建环境
  mode: 'development',
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../dist/index.html',
      template: 'index.html',
      inject: true //  script 标签位于 body 最下面
    })
  ],
  // 本地开发环境
  devServer: {}
});
