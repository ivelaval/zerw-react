const path = require('path');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const project = require('./project');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    symlinks: true,
    cacheWithContext: false,
    plugins: [
      new TsConfigPathsPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'source-map-loader'
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: path.resolve(__dirname, 'src/assets/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        include: path.resolve(__dirname, 'src/assets/images'),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, 'src/styles'),
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[hash].css',
      chunkFilename: 'css/[hash].css',
      ignoreOrder: true
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: project.title,
      favicon: project.favicon,
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
};
