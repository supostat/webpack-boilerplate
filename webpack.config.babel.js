import webpack from 'webpack';

console.log(webpack);

export default {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  }
}
