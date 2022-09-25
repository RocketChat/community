const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');

const PluginINeed = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
});

module.exports = {
  mode: 'development',
  entry: './client/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [PluginINeed],
  resolve: {
    extensions: ['.tsx'],
    modules: [
      path.resolve(__dirname, 'client'), 'node_modules'
    ]
  },
};
