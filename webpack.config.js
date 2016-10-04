const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');
const LOCALHOST_PATH = 'http://localhost:9000';

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    `${APP_DIR}/index.js`
  ],
  output: {
    path: BUILD_DIR,
    publicPath: `${LOCALHOST_PATH}/build/`,
    filename: 'bundle.js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css')
  ]
};
