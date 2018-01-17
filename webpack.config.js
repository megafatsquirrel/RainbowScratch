const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
 
const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: "./app/main.js", // string | object | array
  output: {  
    path: path.resolve(__dirname, "public/js/"), // string
    filename: "bundle.js", // string
    publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: "css-loader"
          }, {
              loader: "less-loader"
          }],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractLess
  ]
}