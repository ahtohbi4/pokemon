const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const baseDir = process.cwd();

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: './app',

  output: {
    filename: '[name].js?hash=[hash]',
    path: path.join(baseDir, 'build/'),
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },

      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './app/index.html',
      filename: './index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],

  resolve: {
    alias: {
      '@Constants': path.resolve(baseDir, 'app/constants'),
      '@Types': path.resolve(baseDir, 'app/types'),

      '@Components': path.resolve(baseDir, 'app/components/'),
      '@Containers': path.resolve(baseDir, 'app/containers/'),
      '@Utils': path.resolve(baseDir, 'app/utils/'),
    },
    extensions: [
        ".js",
        ".json",
        ".ts",
        ".tsx"
    ],
  },
};
