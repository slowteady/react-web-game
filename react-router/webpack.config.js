const path = require('path');
const RefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'games-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['react-refresh/babel'],
      },
    }],
  },
  plugins: [
    new RefreshPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
};
