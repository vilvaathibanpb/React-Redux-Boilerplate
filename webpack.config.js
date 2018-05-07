const path = require("path");
const modules = require("./webpack/modules");
const plugins = require("./webpack/plugins");
let vendorLibs = require("./webpack/vendor");

let UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

let DEV = process.env.NODE_ENV !== "production";
const useVersioning = true;

module.exports = {
  entry: ['react-hot-loader/patch',"./index.js"],
  output: {
    filename: DEV ? "[name].bundle.js" : "[name].[hash].js",
    path: path.resolve(__dirname, "public")
  },
  // devtool: DEV ? "eval-source-map" : "source-map",
  context: path.resolve(__dirname, "src"),
  plugins: plugins,
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    open: true,
    //Un-comment port if you intend to run in specific port.
    // port: 3000,
    compress: true,
    historyApiFallback: true,
    hot: true
  },
  mode: DEV ? "development" : "production",
  // Un-comment externals to remove selected vendor files from bundle.
  // externals: DEV ? [] : vendorLibs,
  module: modules,
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: false })],
    // Comment SplitChunks if requires as single bundle
    splitChunks: {
      chunks: "initial"
    }
  }
};
