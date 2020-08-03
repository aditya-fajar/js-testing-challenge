const mebikibi = require('../src/03');

test('1Mb equals 1024Kb', () => {
    expect(mebikibi(1)).toBe(1024);
  });