const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackPrettierPlugin = require('webpack-prettier-plugin');

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          hot: true,
          port: 8080,
          contentBase: path.join(__dirname, 'public'),
        },
      };

const esLintPlugin = (isDev) =>
  isDev ? [] : [new ESLintPlugin({ extensions: ['ts', 'js', 'tsx', 'jsx'] })];

const prettierPlugin = (isDev) =>
  isDev
    ? [
        new WebpackPrettierPlugin({
          extensions: ['.js', '.ts', '.tsx', '.jsx'],
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          encoding: 'utf-8',
        }),
      ]
    : [];

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : 'source-map',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {from: './public'}
    //   ],
    // }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    ...esLintPlugin(develop),
    ...prettierPlugin(develop),
  ],
  ...devServer(develop),
});
