var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/dist",
    filename: "webpack.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
