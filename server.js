// const webpack = require('webpack');
// const express = require('express');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const app = express();
// const config = require('./webpack.config.js');
// const compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));

// app.listen(4000, () => {
//   console.log('http://localhost:4000');
// })

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
  contentBase: './dist',
  hot: false,
  host: 'localhost',
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});