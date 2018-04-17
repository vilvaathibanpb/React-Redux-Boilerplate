const path = require('path');
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin')


var loaders = [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"],
        },
        {
            test: /.css$/,
            use:[
                {
                    loader: 'style-loader',
                    query: {
                        singleton: true
                    }
                },
                {
                    loader: 'css-loader',
                    query: {
                        module: true,
                        localIdentName: "[path][name]_[local]_[hash:base64:6]"
                    }
                },
                {
                    loader: 'postcss-loader'
                }
            ]
        }
    ];

const client = {
    entry: {
        'client': './src/index.js'
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: {
        rules: loaders
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: 'src/index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                devServer: {
                    inline: true
                }
            },
            minimize: true
        })
      ]
};
const server = {
    entry: {
        'server': './server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: loaders
    },
    externals: [nodeExternals()]
};
module.exports = [client, server];