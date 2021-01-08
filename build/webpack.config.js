const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resovle(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  // 指定构建环境
  mode: 'development',
  // 入口
  entry: {
    app: './src/index'
  },
  // 出口
  output: {
    path: resovle('../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: './' //打包后的资源的 访问前缀
  },

  //   模块
  module: {},
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../dist/index.html', //html生成的模板
      template: 'index.html', //html模板
      inject: true, //true：默认值，script 标签位于html body 最下面
      hash: true, //把打包的资源插入 html 会加上 hash
      //  html 文件进行压缩

      minify: {
        removeComments: true, //去掉注解
        collapseWhitespace: true, //压缩空格
        removeAttributeQuotes: true // 去除 熟悉 标签的 引号
      }
    })
  ],

  // 开发环境本地启动的服务配置
  devServer: {}
};
