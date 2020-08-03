const roman = require('../src/15');

test('What is this roman year equal to?', () => {
  expect(roman('I')).toEqual(1) 
  expect(roman('II')).toEqual(2)
  expect(roman('III')).toEqual(3)
  expect(roman('V')).toEqual(5)
  expect(roman('VI')).toEqual(6)  
  expect(roman('X')).toEqual(10)
  expect(roman('L')).toEqual(50)
  expect(roman('C')).toEqual(100)
  expect(roman('D')).toEqual(500)
  expect(roman('M')).toEqual(1000)
  expect(roman('MMXVIII')).toEqual(2018);
});