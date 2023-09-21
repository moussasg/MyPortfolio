const path = require('path');
module.exports = {
    mode: 'development',
    entry: '/index.html',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: 'html-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],  
        }
      ]
    }
  };
  