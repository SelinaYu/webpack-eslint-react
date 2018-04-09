const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    mode:'development',
    output: {
      filename: '[name].[hash:8].js',
      path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        contentBase: path.join(__dirname,'../dist'),
        port: 9090,
        open:true,
        quiet: true,
        overlay:{
          errors: true,
          warning: true
        },
        // hot: true,
        // historyApiFallback: true                
      },
      plugins:[
        new HtmlWebpackPlugin(),        
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin(),
    ],
    module:{
        rules:[
          {
              test: /\.jsx?$/,
              include: path.join(__dirname, '../src'),
              exclude: /node_modules/,
              loader: 'babel-loader'
          },
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test: /\.scss$/,
              use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
              ]
          },
          {
              test: /\.less$/,
              use: [
                  'style-loader',
                  'css-loader',
                  'less-loader'
              ]
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                      {
                      loader:'url-loader',
                      options: {
                              limit: 1000,
                              name: 'images/[name].[hash:8].[ext]'
                      }
                      }
              ]
          }
        ]
    }
})