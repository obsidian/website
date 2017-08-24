/* eslint-env node */
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './Browser',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'sourcemap',
  output: {
    publicPath: '/assets/',
    path: path.resolve(__dirname, './public/assets'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, './node_modules')
        ],
        loader: 'babel-loader'
      }
    ]
  }
}
