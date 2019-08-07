const errors = require('./errors');
const CustomError = require('./CustomError');

module.exports = {
  CustomError,
  ...errors,
};
