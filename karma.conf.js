process.env.CHROME_BIN = require('puppeteer').executablePath();

const webpackConfig = require('./webpack.config.tests.js');

const configuration = {
  frameworks: ['jasmine'],
  files: [
    'https://static.cloud.coveo.com/searchui/v2.3679/js/CoveoJsSearch.Lazy.min.js',
    'node_modules/coveo-search-ui-tests/bin/js/CoveoJsSearchTests.js',
    'src/**/*.spec.ts'
  ],
  preprocessors: {
    'src/**/!(*.spec).ts': ['webpack', 'sourcemap', 'coverage'],
    'src/**/*.spec.ts': ['webpack', 'sourcemap']
  },
  mime: {
    'text/x-typescript': ['ts']
  },
  reporters: ['coverage-istanbul', 'spec'],
  coverageIstanbulReporter: {
    dir: './bin/coverage',
    reports: ['json', 'lcov', 'text'],

    fixWebpackSourcePaths: true
  },
  singleRun: true,
  webpack: webpackConfig,
  browsers: ['ChromeHeadless']
};

module.exports = function(config) {
  config.set(configuration);
};
