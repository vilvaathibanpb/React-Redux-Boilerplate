const ExtractTextPlugin = require("extract-text-webpack-plugin");
var PROD = process.env.NODE_ENV === "production";

module.exports = {
  rules: [
    {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "./images/"
          }
        }
      ]
    },
    {
      test: /\.css$/,
      use: PROD
        ? ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  importLoaders: 1
                }
              },
              { loader: "postcss-loader" }
            ]
          })
        : [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader"
            }
          ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    }
  ]
};
