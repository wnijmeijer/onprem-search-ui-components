const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    CoveoCustomComponents: './src/Index'
  },
  output: {
    path: path.resolve('./bin/'),
    libraryTarget: 'umd',
    library: 'CoveoCustomComponents',
    publicPath: '/bin/',
    filename: `./js/[name].js`
  },
  resolve: {
    extensions: ['.ts', '.js', '.svg', '.scss'],
    alias: {
      svg: path.resolve('./images/svg'),
      sass: path.resolve('./sass')
    }
  },
  externals: [
    {
      'coveo-search-ui': 'Coveo',
      underscore: '_'
    }
  ],
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    })
  ],
  module: {
    rules: [
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
    ]
  }
};
