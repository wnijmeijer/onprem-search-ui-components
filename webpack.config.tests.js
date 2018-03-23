const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const WebpackKarmaWarningsPlugin = function() {};
const RawSource = require('webpack-sources').RawSource;

WebpackKarmaWarningsPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('failed-module', function(module) {
      var moduleErrorMessage = module.error.error.toString();
      module._source = new RawSource(`throw new Error(${JSON.stringify(moduleErrorMessage)});`);
      module.error = null;
    });
  });
};

webpackConfig.module.rules.push({
  enforce: 'post',
  test: /\.ts$/,
  loader: 'istanbul-instrumenter-loader',
  include: /(src)/,
  exclude: ['node_modules', /\.spec\.ts$/]
});

webpackConfig.externals.push({
  'coveo-search-ui-tests': 'CoveoJsSearchTests'
});

const plugins = [
  new webpack.SourceMapDevToolPlugin({
    filename: null, // if no value is provided the sourcemap is inlined
    test: /\.(ts|js)($|\?)/i // process .js and .ts files only
  }),
  new WebpackKarmaWarningsPlugin()
];
webpackConfig.plugins = plugins;

module.exports = webpackConfig;
