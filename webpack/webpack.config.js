const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // which module webpack should use to begin building
  // default value is ./src/index.tsx
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  // import App from './App' how it find App.tsx?
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // Where files should be sent once they are bundled
  // defaults to ./dist/main.js
  output: {
    path: path.resolve(__dirname, "..", "/build"),
    filename: "bundle.js",
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    hot: true,
  },
  mode: "development",
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      //   {
      //     test: /\.svg$/,
      //     use: "svg-inline-loader",
      //   },
      {
        test: /\.(ts|js)x$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      //   {
      //     test: /\.css$/,
      //     use: ["style-loader", "css-loader"],
      //   },
      //   {
      //     test: /\.jpg/,
      //     type: 'asset/resource'
      //   }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
