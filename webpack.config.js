module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['react-hot-loader', 'babel-loader']
      }, 
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
