const webpack = require('webpack');
const failPlugin = require('webpack-fail-plugin');
const path = require('path');
const ReloadPlugin = require('reload-html-webpack-plugin');
const production = process.env.NODE_ENV === 'production';

console.log('IS PRODUCTION', production);

const configureSassForDev = require('./webpack.sass').configureSassForDev;
const configureSassForProduction = require('./webpack.sass').configureSassForProduction;

let plugins = [];
let additionalRules = [];

plugins.push(failPlugin);

if (!production) {
  plugins.push(new ReloadPlugin());
}

if (production) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

if (production) {
  configureSassForProduction(additionalRules, plugins, production);
}

if (!production) {
  configureSassForDev(additionalRules, plugins, production);
}

module.exports = {
  entry: {
    CoveoCustomComponents: [path.resolve('./src/Index')]
  },
  output: {
    path: require('path').resolve('./bin/js'),
    filename: production ? `[name].min.js` : `[name].js`,
    libraryTarget: 'umd',
    library: 'CoveoCustomComponents',
    publicPath: '/bin/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.svg', '.scss'],
    alias: {
      svg: require('path').resolve('./images/svg'),
      sass: require('path').resolve('./sass')
    }
  },
  externals: [
    {
      'coveo-search-ui': 'Coveo'
    }
  ],
  devtool: 'inline-source-map',
  module: {
    rules: additionalRules.concat([
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {}
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader'
          }
        ]
      }
    ])
  },
  plugins: plugins,
  bail: true
};
