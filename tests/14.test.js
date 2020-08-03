const isogram = require('../src/14');

test('is this isogram?', () => {
  expect(isogram('gelas')).toBe(true)
  expect(isogram('makan')).toBe(false)
});