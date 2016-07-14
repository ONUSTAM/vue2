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
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
    })
  ]
};
