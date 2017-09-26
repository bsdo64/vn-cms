const { resolve } = require('path');
const webpack = require('webpack');
const root = resolve(__dirname, '../../');

module.exports = {
  context: resolve(root, 'src'),

  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8079',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './index.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(root, 'dist'),

    publicPath: `http://localhost:8079/`
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(root, 'dist'),
    // match the output path

    port: 8079,
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: `http://localhost:8079/`,
    stats: true,
    historyApiFallback: true,
  },

  target: "web",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]&importLoaders=1',
          'postcss-loader'
        ]
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};