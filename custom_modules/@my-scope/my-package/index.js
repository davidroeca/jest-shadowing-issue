'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var myPackage = require('my-package');

function checkOriginal() {
  if (myPackage.original == null) {
    throw new Error('The original was not found')
  }
  return myPackage.original
};

module.exports = {
  scoped: 'in the scope',
  checkOriginal: checkOriginal,
};
