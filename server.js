const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config.js');

const compiler = webpack(config);
const app = express();


app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  index: 'index.html'
}));

app.use(webpackHotMiddleware(compiler));

app.listen(9000, () => {
  console.log(`Listening at ${config.output.publicPath}`);
});