var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var WebpackConfig = require("./webpack.config");
var config = require("./config");
var path = require("path");

var compiler = webpack(WebpackConfig);

var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options

  // contentBase: path.join(__dirname, "/public"),
  // or: contentBase: "http://localhost/",

  // hot: true,
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: false,

  // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
  // Use "*" to proxy all paths to the specified server.
  // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
  // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
  // proxy: {
  //   "*": "http://localhost:9090"
  // },

  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  hot: true,
  // lazy: true,
  // filename: "application.js",
  // watchOptions: {
  //   aggregateTimeout: 300,
  //   poll: 1000
  // },
  publicPath: WebpackConfig.output.publicPath,
  // headers: { "X-Custom-Header": "yes" },
  stats: {
    progress: true,
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false
  },
});

server.listen(config.assets.port, "localhost", function() {
    var host = this.address().address;
    var port = this.address().port;
    console.log('Webpack development server is running on http://%s:%s', host, port);
});
