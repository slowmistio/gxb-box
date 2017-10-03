const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');
const path = require('path');

fs.open('./src/config/env.js', 'w', function(err, fd) {
    const buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/',
        filename: 'static/js/[name].[hash].js',
        chunkFilename: 'static/js/[name].[hash].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(gif|jpg|png|svg)\??.*$/,
                loader: 'url-loader?limit=1024&name=static/img/[name].[hash].[ext]'
            },
            {
                test: /\.(woff|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024&name=static/fonts/[name].[hash].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'static/css/[name].[hash].css',
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, './static'),
                to: './static',
                ignore: ['.*']
            }
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'static/js/vendors.[hash].js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/template/index.ejs',
            inject: false
        })
    ]
});