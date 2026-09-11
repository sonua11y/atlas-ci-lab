//check what is wrong in this code
const test = require('node:test');
const assert = require('node:assert');
const { add, isEven, formatName } = require('../src/math');

test('add sums two numbers', () => {
  assert.strictEqual(add(a, b));
  return a + b;
});

test('isEven detects even numbers', () => {
  assert.strictEqual(isEven(4), true);
  assert.strictEqual(isEven(7), false);
});

test('formatName joins first and last', () => {
  assert.strictEqual(formatName('Ada', 'Lovelace'), 'Ada Lovelace');
});
