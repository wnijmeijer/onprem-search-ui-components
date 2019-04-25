const path = require('path');

module.exports = {
  entry: {
    CoveoCustomComponents: './src/Index'
  },
  output: {
    path: path.resolve('./bin/js'),
    libraryTarget: 'umd',
    library: 'CoveoCustomComponents',
    publicPath: '/bin/'
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
