const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",

  devtool: "source-map",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  entry: {
    index: "./src/index.ts",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },

  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    // alias: {
    // "@/*": path.resolve(__dirname, "src/"),
    // },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
