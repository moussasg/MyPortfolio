const path = require('path');
// webpack : web bundling tool that efficiently combines and processes various source files like JavaScript, CSS, and images
module.exports = {
  mode: 'development',
  entry: './public/index.html',
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'OrbitControls': path.resolve(__dirname, './main.js')
    }
  }
};
