const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry:  './src/index.js',
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'cheap-module-source-map',//开发模式，生产模式'cheap-eval-source-map'
  devServer: {
      contentBase: './dist',
      port: 9000,
      compress: true,
      hot: true,
      noInfo: true,
    },
  module:{
      rules:[
        // {
        //     test: /\.jsx?$/,
        //     loader: 'babel-loader'
        // },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        // {
        //     test: /\.scss$/,
        //     use: [
        //         'style-loader',
        //         'css-loader',
        //         'sass-loader'
        //     ]
        // },
        // {
        //     test: /\.less/,
        //     use: [
        //         'style-loader',
        //         'css-loader',
        //         'less-loader'
        //     ]
        // },
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
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin ({
      sourceMap: true
    })
   ],    
}