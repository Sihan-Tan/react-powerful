const { join, resolve } = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const notifier = require('node-notifier');
const baseConfig = require('./webpack.config');

const devConfig = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    static: {
      directory: join(__dirname, '../dist'),
    },
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '开发中~~',
      filename: 'index.html',
      template: resolve(__dirname, '../public/index-dev.html'),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:3000'],
        notes: ['💊 构建信息请及时关注窗口右上角'],
      },
      onErrors: function (severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        // console.log(error);
        notifier.notify({
          title: '👒 Webpack构建失败',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
        });
      },
      clearConsole: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].css',
      ignoreOrder: false,
    }),
  ],
};

module.exports = merge(baseConfig, devConfig);
