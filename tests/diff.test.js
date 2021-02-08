import diff from '../code/diff';

test("subtracts 3 - 2 to equal 1", () => {
  expect(diff(3, 2)).toBe(1);
});
