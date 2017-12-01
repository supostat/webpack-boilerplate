"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

console.log(_webpack.default);
var _default = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  }
};
exports.default = _default;

