const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
    open: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  mode: 'development', // Switch to 'production' for production build
  devtool: 'source-map', // Enable source maps for debugging
};
