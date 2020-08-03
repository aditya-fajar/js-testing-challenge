const length = require('../src/01');

test('four have 4 char', () => {
  expect(length('four')).toEqual(4);
});

