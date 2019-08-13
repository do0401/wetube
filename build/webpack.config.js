"use strict";

var path = require("path");

var autoprefixer = require("autoprefixer");

var ExtractCSS = require("extract-text-webpack-plugin");

var MODE = process.env.WEBPACK_ENV;
var ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
var OUTPUT_DIR = path.join(__dirname, "static");
var config = {
  mode: MODE,
  module: {
    rules: [{
      test: /\.(js)$/,
      use: [{
        loader: "babel-loader"
      }]
    }, {
      test: /\.(scss)$/,
      use: ExtractCSS.extract([{
        loader: "css-loader"
      }, {
        loader: "postcss-loader",
        options: {
          plugins: function plugins() {
            return [autoprefixer({
              browsers: "cover 99.5%"
            })];
          }
        }
      }, {
        loader: "sass-loader"
      }])
    }]
  },
  entry: ["@babel/polyfill", ENTRY_FILE],
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")]
};
module.exports = config;