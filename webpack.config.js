const webpack = require('webpack'); 
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = {
  entry: {
    bundle: ['react-hot-loader/patch', './src/index.js']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', 'json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      actions: resolve(__dirname, './src/actions')
    },
    fallback: {
      util: require.resolve("util/"),
      'path': require.resolve("path-browserify"),
      'os': require.resolve("os-browserify/browser"),
      'assert': require.resolve("assert/"),
      'fs': false
    }
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // template: './src/index.html'
      template: resolve(__dirname, './src/index.html')
    }),
    new LodashModuleReplacementPlugin,
  ]
};

module.exports = config;
