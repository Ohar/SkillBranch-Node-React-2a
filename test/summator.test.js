'use strict';

const chai     = require('chai'),
      summator = require('./../scripts/summator'),
      assert   = chai.assert;

describe(
  'summator', () => {
    it(
      'Это функция', () => {
        assert.isFunction(summator);
      }
    );

    it(
      'Возвращает число', () => {
        assert.isNumber(summator());
      }
    );

    describe(
      'Корректность подсчёта', () => {

        describe(
          'Складывает числа', () => {

            it(
              '1 + 2 = 3', () => {
                assert.equal(summator(1, 2), 3);
              }
            );

            it(
              '41 + 42 = 83', () => {
                assert.equal(summator(41, 42), 83);
              }
            );

            it(
              '100 + −55 = 45', () => {
                assert.equal(summator(100, -55), 45);
              }
            );

          }
        );

        describe(
          'Преобразует строки в числа и складывает', () => {

            it(
              '"1" + 2 = 3', () => {
                assert.equal(summator("1", 2), 3);
              }
            );

            it(
              '41 + "42" = 83', () => {
                assert.equal(summator(41, "42"), 83);
              }
            );

            it(
              '"100" + −55 = 45', () => {
                assert.equal(summator("100", -55), 45);
              }
            );

          }
        );

        describe(
          'Недостаток аргументов', () => {

            it(
              'Работает с одним числом', () => {
                assert.equal(summator(42), 42);
              }
            );

            it(
              'Без чисел возвращает 0', () => {
                assert.equal(summator('азазаз'), 0);
              }
            );

          }
        );

      }
    );
  }
);
