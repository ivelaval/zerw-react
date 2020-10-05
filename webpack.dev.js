const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: ['./src/index.tsx', 'webpack/hot/dev-server'],
    vendor: ['react', 'react-dom']
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8361
  },
  stats: {
    colors: true,
    errorDetails: true,
    reasons: true,
    version: true,
    warnings: true,
  },
  watch: true,
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
