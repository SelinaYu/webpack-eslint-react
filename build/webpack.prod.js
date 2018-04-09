const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.js');
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(baseConfig, {
    devtool: 'hidden-source-map',
    entry:{
      main: './src/index.js',
      vendor: [
        'lodash'
      ]
    },
    output: {
      filename: '[name].[chunkhash:8].js',
      path: path.resolve(__dirname, '../dist'),
    },
    mode:'production',
    plugins:[
      new HtmlWebpackPlugin(),      
      new CleanWebpackPlugin([ 'dist' ], {
        root: path.join(__dirname, '../')
      }),
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new ExtractTextPlugin({
        filename: "styles.css",
        allChunks: true
      })
    ],
    optimization:{
      splitChunks:{
        cacheGroups:{
          commons: {
            //  test: /assets\/|components\//,
             chunks: 'initial',
             name: 'common',
             minChunks: 2,
             maxInitialRequests: 5,
             minSize: 0
          },
          vendor: {
             test:   /[\\/]node_modules[\\/]/,
             chunks: 'all',
             name: 'vendor', //第三方库
             priority: 10,
             enforce: true,
          }
       }
    },
    runtimeChunk: {
       name: 'manifest'  // webpack会添加一个只包含运行时(runtime)额外代码块到每一个入口
      }
    },
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
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader","sass-loader"]
            })
        },
        {
            test: /\.less$/,
            use:ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader","less-loader"]
            })
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