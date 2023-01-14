const path = require('path');

module.exports = {
  entry: './src/input.js',
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'dist'),
  },
};