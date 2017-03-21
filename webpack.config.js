var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
    './Client/src/index.js'
  ],
  devtool: 'sourcemap',
  output: {
    path: path.join(__dirname, '/html'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './html'
  },
  plugins: []
};
