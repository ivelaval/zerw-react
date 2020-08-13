const path = require('path');
const TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsConfigPathsPlugin(/* { tsconfig, compiler } */)]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
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
      title: 'Zerw React',
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
};
