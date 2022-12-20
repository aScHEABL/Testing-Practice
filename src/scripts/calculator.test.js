const calculator = require("./calculator");

describe("A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. \
Each of these functions should take two numbers and return the correct calculation.", () => {
  test("Works with addition", () => {
    expect(calculator.add(2, 8)).toBe(10);
  })
  test("Works with subtraction", () => {
    expect(calculator.subtract(6, 3)).toBe(3);
  })
  test("Works with division", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  })
  test("Works with multiplication", () => {
    expect(calculator.multiply(100, 100)).toBe(10000);
  })
})
