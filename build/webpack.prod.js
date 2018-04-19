const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.js');
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'hidden-source-map',

  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
      favicon: './src/assets/images/favicon.ico'
    }),
    new CleanWebpackPlugin([ 'dist' ], {
      root: path.join(__dirname, '../')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    // new CopyWebpackPlugin([
    //   { from: './src/assets/images/*', to: './images' ,  flatten: true},
    //   // { from: './src/flexpaper', to: './js/flexpaper' },
    // ]),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          //  test: /assets\/|components\//,
          chunks: 'initial',
          name: 'common',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor',  // 第三方库
          priority: 10,
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.less|scss|css$/,
          chunks: 'all',    // merge all the css chunk to one file
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'  // webpack会添加一个只包含运行时(runtime)额外代码块到每一个入口
    },
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '../src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
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
