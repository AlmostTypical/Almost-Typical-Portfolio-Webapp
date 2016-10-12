const Path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        exclude: Path.join(__dirname, './node_modules')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};