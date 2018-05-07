const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");

var PROD = process.env.NODE_ENV === "production";

let plugins = [
  new HtmlWebpackPlugin({
    template: "index.html"
  }),
  new CleanWebpackPlugin(['public']),
  new webpack.HotModuleReplacementPlugin()
];

if (PROD) {
    plugins.push(
    new ExtractTextPlugin("style.[hash].css"),
    // new CompressionPlugin({
    //   asset: "[path][query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.svg$/
    // })
  );
}

module.exports = plugins;
