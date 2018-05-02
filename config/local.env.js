'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./dev.env');

module.exports = merge(prodEnv, {
  API: '"http://localhost:3000"'
});
