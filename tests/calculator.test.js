import calculator from "../code/calculator";

test("add 1+2 should be 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 2-1 should be 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("multiply 5*2 should be 10", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("divide 10/5 should be 2", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
