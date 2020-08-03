const censor = require('../src/10');

test('saya and nasi is Censored!', () => {
  expect(censor('Saya ingin makan nasi goreng.',['saya','nasi'])).toEqual('#### ingin makan #### goreng.');
});