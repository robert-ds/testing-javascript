const op = require("../demos/math-operations.js");

test("Added 2 + 2 to equal 4", () => {
  expect(op.sum(2, 2)).toBe(4);
});

test("Multiply 2 * 2 to equal 4", () => {
  expect(op.multiply(2, 2)).toBe(4);
});

test("Divide 4 / 2 to equal 2", () => {
  expect(op.divide(4, 2)).toBe(2);
});

test("Substract 3 - 1 to equal 2", () => {
  expect(op.substract(3, 1)).toBe(2);
});

test("Pow 2 ^ 3 to equal 8", () => {
  expect(op.power(2, 3)).toBe(8);
});
