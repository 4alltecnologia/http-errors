const R = require('ramda');
const errors = require('./errors');
const CustomError = require('./CustomError');

module.exports = R.mergeDeepRight({ CustomError }, errors);
