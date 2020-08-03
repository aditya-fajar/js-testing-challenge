const leapYear = require('../src/04');

test('2020 is Leap Year!', () => {
    expect(leapYear(2020)).toBeTruthy();
});