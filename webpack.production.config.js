const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: { filename: "bundle.js", path: path.resolve(__dirname, "public") },
  plugins: [
    new webpack.DefinePlugin({
      __CONFIG__: JSON.stringify(
        process.env.TRAVIS_TAG ? "remote prod" : "local prod"
      )
    })
  ]
};
