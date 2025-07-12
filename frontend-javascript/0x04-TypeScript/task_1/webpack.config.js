const path = require('path');

module.exports = {
  entry: './js/main.ts', // ✅ this is your actual code file
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',
  devtool: 'eval', // or 'inline-source-map' if you want better debugging
  devServer: {
    static: './dist',
    open: true,
    hot: true,
    port: 3000,
  },
};
