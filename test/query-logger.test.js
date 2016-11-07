'use strict';

const chai        = require('chai'),
      queryLogger = require('./../scripts/query-logger'),
      assert      = chai.assert;

describe(
  'queryLogger', () => {
    it(
      'Это функция', () => {
        assert.isFunction(queryLogger);
      }
    );
  }
);
