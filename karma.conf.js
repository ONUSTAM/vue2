var webpack = require('webpack');

// Karma configuration
// Generated on Sat Oct 03 2015 17:25:04 GMT+0900 (JST)
module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/*_test.js', //<-- testディレクトリ内にtestを書く想定です。
    ],
    exclude: [
    ],

    preprocessors: {
      'test/*_test.js': ['webpack','sourcemap'],  //<-- 追加
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    // <-- 追加（start）
    webpack: {
            // webpack configuration
          module: {
            loaders: [
              { test: /\.vue$/, loader: 'vue' },
            ]
          },
          plugins: [
            new webpack.ProvidePlugin({
              $: "jquery",
            })
          ],
          devtool: 'inline-source-map' //<-- 基本的にほとんどwebpack.config.jsと同じですが、ここの追加を忘れないようにします。
    },
    webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
        // inoInfo: true
    },
    plugins: [
      require("karma-jasmine"),
      require("karma-webpack"),
      require("karma-chrome-launcher"),
      require("karma-sourcemap-loader"),
     ]
    // <-- 追加（end）
  })
}
