const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: ['./src/index.tsx'],
    vendor: ['react', 'react-dom']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(sa|sc|c)ss$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new webpack.HashedModuleIdsPlugin()]
});
