var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require("./config");

module.exports = {
  watch: true,
  entry: {
    app: [
      `webpack-dev-server/client?http://localhost:${ config.assets.port }`,
      "webpack/hot/dev-server",
      path.join(__dirname, "app/application.jsx"),
      path.join("bootstrap-sass!", path.join(__dirname, "bootstrap-sass.config.js"))
    ]
  },
  output: {
    path: path.join(__dirname, "public/assets"),
    filename: "application.js",
    publicPath: `http://localhost:${config.assets.port}/assets`
  },
  module: {
    loaders: [
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: "imports?jQuery=jquery"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.jsx$/,
        loader: "babel"
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("application.css", {
      allChunks: true
    }),
    new webpack.DefinePlugin(config.client)
  ]
};
