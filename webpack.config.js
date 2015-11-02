var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    //'webpack-dev-server/client?http://0.0.0.0:3000',
    //'webpack/hot/only-dev-server',
    "./src/client/entry"
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jade$/, loader: "jade" }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
