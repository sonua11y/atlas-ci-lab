//check what is wrong in this code
const test = require('node:test');
const assert = require('node:assert');
const { add, isEven, formatName } = require('../src/math');

const add = (a, b) => a + b;
const isEven = (num) => num % 2 === 0;
const formatName = (first, last) => `${first} ${last}`;
module.exports = { add, isEven, formatName };

test('add sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('isEven detects even numbers', () => {
  assert.strictEqual(isEven(4), true);
  assert.strictEqual(isEven(7), false);
});

test('formatName joins first and last', () => {
  assert.strictEqual(formatName('Ada', 'Lovelace'), 'Ada Lovelace');
});
