const path = require("path");
const modules = require("./webpack/modules");
const plugins = require("./webpack/plugins");
let vendorLibs = require('./webpack/vendor');

let UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

let DEV = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public")
  },
  context: path.resolve(__dirname, "src"),
  plugins: plugins,
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    open: true,
    port: 3000,
	compress: true,
	historyApiFallback: true
  },
  mode: DEV ? "development" : "production",
  // Commnet externals if all vendor files are requires. 
  externals: DEV ? [] : vendorLibs,
  module: modules,
  optimization: {
	minimizer: [new UglifyWebpackPlugin({ sourceMap: false })],
	// Comment the SplitChunks part if requires as single bundle
    splitChunks: {
      chunks: "initial"
    }
  }
};
