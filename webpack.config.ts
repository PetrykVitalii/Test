/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from "path";
import webpack from "webpack";
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: webpack.Configuration = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: "./index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./html/index.html" }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./netlify/_redirects", to: "_redirects", toType: "file" },
      ],
    }),
  ],
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

export default config;