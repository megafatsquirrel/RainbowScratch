const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [ './app/main.js', './app/styles/main.less' ], 
  output: {  
    path: path.resolve(__dirname, 'public/js/'), // string
    filename: 'bundle.js', // string
    publicPath: '/assets/', // string
    // the url to the output directory resolved relative to the HTML page
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'less-loader' ],
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../styles/main.css')
  ]
}