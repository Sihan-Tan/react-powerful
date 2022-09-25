const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: {
    main: resolve(process.cwd(), 'src/index.tsx'),
  },
  output: {
    path: resolve(process.cwd(), 'dist'),
  },
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.css$/i,
        include: resolve(__dirname, 'src'),
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@hooks': resolve('src/hooks'),
      '@pages': resolve('src/pages'),
      '@assets': resolve('src/assets'),
      '@states': resolve('src/states'),
      '@routes': resolve('src/routes'),
      '@utils': resolve('src/utils'),
    },
    extensions: ['.js', '.ts', '.tsx', 'jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:5].css',
      chunkFilename: 'styles/[name].[contenthash:5].css',
      ignoreOrder: false,
    }),
    new CleanWebpackPlugin(),
    new WebpackBar(),
  ],
};
