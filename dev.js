'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');
const argv = require('yargs').argv;
const port = argv.port || 8080;

webpackConfig.entry.CoveoCustomComponents.unshift(`webpack-dev-server/client?http://localhost:${port}/`);

const compiler = webpack(webpackConfig);

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true
  },
  contentBase: './bin/',
  publicPath: '/js/',
  compress: true
});

const webpackServer = new WebpackDevServer(compiler, devServerOptions);

webpackServer.listen(port, (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(`Starting server on http://localhost:${port}`);
});
