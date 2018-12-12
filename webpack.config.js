const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const baseDir = process.cwd();

module.exports = {
  entry: './app',

  output: {
    filename: '[name].js?hash=[hash]',
    path: path.join(baseDir, 'build/'),
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './app/index.html',
      filename: './index.html',
    }),
  ],

  resolve: {
    alias: {
      '@components': path.resolve(baseDir, 'app/components/'),
      '@containers': path.resolve(baseDir, 'app/containers/'),
    },
  },
};
