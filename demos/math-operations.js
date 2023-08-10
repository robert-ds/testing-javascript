/**
 * Sum two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} Sum of a and b
 * @example sum(1, 2) // 3
 */
function sum(a, b) {
  return a + b;
}

/**
 * Multiply two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} Multiply of a and b
 * @example multiply(2, 2) // 4
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} Divide of a and b
 * @example divide(4, 2) // 2
 */
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

/**
 * Substract two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} Substract of a and b
 * @example subtract(3, 1) // 2
 */
function substract(a, b) {
  return a - b;
}

/**
 * Power of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} Pow of a and b
 * @example power(2, 3) // 8
 */
function power(a, b) {
  return Math.pow(a, b);
}

/**
 * @module math-operations
 */
module.exports = {
  sum,
  multiply,
  divide,
  substract,
  power,
};
