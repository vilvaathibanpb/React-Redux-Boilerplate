const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
		test: /\.js$/,
		exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }