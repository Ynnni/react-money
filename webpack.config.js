var path = require('path');

module.exports = {
  watch: true,
  entry: [
    path.join(__dirname, "app/assets/javascripts/application.jsx"),
    path.join("bootstrap-sass!", path.join(__dirname, "bootstrap-sass.config.js"))
  ],
  output: {
    path: path.join(__dirname, "public/assets"),
    filename: "application.js"
  },
  module: {
    loaders: [
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
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
        loader: "style!css!sass"
      }
    ]
  }
};
