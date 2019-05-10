const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    'CoveoCustomComponents.min': './src/Index'
  },
  optimization: {
    minimizer: [new TerserJSPlugin({ test: /\.min\.js$/i }), new OptimizeCSSAssetsPlugin({ assetNameRegExp: /\.min\.css$/i })]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});
