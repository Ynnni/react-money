module.exports = {
  watch: true,
  output: {
    filename: "application.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader"
      }
    ]
  }
};
