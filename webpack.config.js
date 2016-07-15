var webpack = require('webpack');

module.exports = {
  entry: './scripts/main.js',
  output: {
    path: "./build",
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
    })
  ]
};
