var webpack = require('webpack');

module.exports = {
  entry: [
    //'webpack-dev-server/client?http://0.0.0.0:8000',
    //'webpack/hot/only-dev-server',
    "./src/client/app.js"
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};