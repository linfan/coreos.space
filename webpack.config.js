var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    //'webpack-dev-server/client?http://0.0.0.0:8000',
    //'webpack/hot/only-dev-server',
    "./src/client/entry.js"
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
