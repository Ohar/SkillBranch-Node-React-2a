'use strict';

function summator (inputA, inputB) {
  const a = Number(inputA) || 0,
        b = Number(inputB) || 0;

  return a + b;
}

module.exports = summator;
