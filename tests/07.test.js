const repeat = require('../src/07');

test('Hello World! more like HHeelllloo WWoorrlldd!!', () => {
  expect(repeat('Hello World!',2)).toEqual('HHeelllloo WWoorrlldd!!');
});