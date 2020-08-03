const arrMirror = require('../src/08');

test('[1,2,3] mirror! [1,2,3,3,2,1]', () => {
  expect(arrMirror([1,2,3])).toEqual([1,2,3,3,2,1]);
});