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
  compress: true,
  before(app) {
    app.set('view engine', 'ejs');
    app.get('/', (req, res) => {
      res.render(`index`, (err, html) => {
        if (err) {
          console.error(err);
          res.status(404).send('Page not found');
        } else {
          res.send(html);
        }
      });
    });
  }
});

const webpackServer = new WebpackDevServer(compiler, devServerOptions);

webpackServer.listen(port, (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(`Starting server on http://localhost:${port}`);
});
