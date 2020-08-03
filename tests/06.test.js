const repeat = require('../src/06');

test('Makan! 3x equals Makan!Makan!Makan!', () => {
  expect(repeat('Makan!',3)).toEqual('Makan!Makan!Makan!');
});