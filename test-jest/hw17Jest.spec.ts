import { Calculator } from "../hw16";
describe("Test calculator", () => {
  test("Negative test add", () => {
    const num1 = "5";
    const num2 = "fgdfg";
    const actual = Calculator.add(num1, num2);
    expect(actual).toBeNaN();
  });

  test("Positive test add", () => {
    const num1 = "5";
    const num2 = "9";
    const expected = 14;
    const actual = Calculator.add(num1, num2);
    expect(expected).toEqual(actual);
  });

  test("Negative test subtract", () => {
    const num1 = "5";
    const num2 = "#*%";
    const actual = Calculator.subtract(num1, num2);
    expect(actual).toBeNaN();
  });

  test("Positive test subtract", () => {
    const num1 = "-1";
    const num2 = "-5";
    const expected = 4;
    const actual = Calculator.subtract(num1, num2);
    expect(expected).toBe(actual);
  });
  test("Negative test multiply", () => {
    const num1 = "6";
    const num2 = "▩⑳";
    const actual = Calculator.multiply(num1, num2);
    expect(actual).toBeNaN();
  });
  test("Positive test multiply", () => {
    const num1 = "6.05";
    const num2 = "3.21";
    const expected = 19.4205;
    const actual = Calculator.multiply(num1, num2);
    expect(expected).toBeCloseTo(actual, 0.1);
  });
});
