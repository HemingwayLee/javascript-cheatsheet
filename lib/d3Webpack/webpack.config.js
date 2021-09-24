const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'myLib'
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    disableHostCheck: true
  }
};

