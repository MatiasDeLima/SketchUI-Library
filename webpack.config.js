const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/SketchUI.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'SketchUI.js',
    library: 'SketchUI',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `@license\nCopyright 2023-${new Date().getFullYear()} @ui_matias \nLicense: MIT`,
    }),
    new MiniCssExtractPlugin({
      filename: 'SketchUI.css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(), 
    ],
  },
};