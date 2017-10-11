const averageString = require('./string-average');

test('zero nine five two should be return four', () => {
  expect(averageString("zero nine five two")).toBe("four");
});

test('four six two three should be return three', () => {
  expect(averageString("four six two three")).toBe("three");
});

test('one two three four five should be return three', () => {
  expect(averageString("one two three four five")).toBe("three");
});

test('five four should be return four', () => {
  expect(averageString("five four")).toBe("four");
});


test('zero zero zero zero zero should be return zero', () => {
  expect(averageString("zero zero zero zero zero")).toBe("zero");
});

test('one one eight one should be return two', () => {
  expect(averageString("one one eight one")).toBe("two");
});

test('"" should be return n/a', () => {
  expect(averageString("")).toBe("n/a");
});
