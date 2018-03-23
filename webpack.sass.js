const ExtractTextPlugin = require('extract-text-webpack-plugin');

const configureSassForProduction = (additionalRules, plugins, production) => {
  const cssFilename = production ? '../css/CoveoCustomComponents.min.css' : '../css/CoveoCustomComponents.css';
  const extractSass = new ExtractTextPlugin({
    filename: cssFilename
  });
  additionalRules.push({
    test: /\.scss/,
    use: extractSass.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            minimize: production
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ],
      fallback: 'style-loader'
    })
  });
  plugins.push(extractSass);
  bail = true;
};

const configureSassForDev = (additionalRules, plugins, production) => {
  additionalRules.push({
    test: /\.scss/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader'
      }
    ]
  });
  bail = false;
};

module.exports = {
  configureSassForDev,
  configureSassForProduction
};
