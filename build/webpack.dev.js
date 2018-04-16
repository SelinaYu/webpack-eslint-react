const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 9091,
    // quiet: true,
    overlay: {
      errors: true,
      // warning: true
    },
    stats: {
      reasons: false,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    },
    clientLogLevel: 'none'
    // hot: true, 当前版本有错，等下一版本 ^3.1.3 出来替换
    // historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
      favicon: './src/assets/images/favicon.ico'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   { from: './src/assets/images/*', to: './images/',  flatten: true },
    //   // { from: './src/flexpaper', to: './js/flexpaper' },
    // ]),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      },
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
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'images/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
});
