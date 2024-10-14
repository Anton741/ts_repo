const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const webpack = require('webpack')

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } },
        ],
      },
      {
        test: /\.svg$/,
        use: ["svg-sprite-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "assets",
      },
    ],
  },
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new SvgSpriteLoaderPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
