const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const VueSSRPlugin = require('vue-ssr-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    app: './app/army-builder/army-builder-entry-server.js'
  },
  devtool: false,
  output: {  
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'army-builder-server.bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'production'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
});
module.exports = webpackConfig;