const symmetrical = require('../src/09');

test('is this symmetrical?', () => {
  expect(symmetrical('malam')).toBe(true) // true
  expect(symmetrical('taat')).toBe(true)  // true
  expect(symmetrical('tidur')).toBe(false) // false
  expect(symmetrical(1234)).toBe(false)    // false
  expect(symmetrical(108801)).toBe(true)  // true
  expect(symmetrical(8001008)).toBe(true) // true
});