import { expect } from "chai";
import { Calculator } from "../hw16";
describe("Test calculator", () => {
  it("Negative test add", () => {
    const num1 = "5";
    const num2 = "fgdfg";
    const actual = Calculator.add(num1, num2);
    expect(actual).be.deep.equal(NaN);
  });

  it("Positive test add", () => {
    const num1 = "5";
    const num2 = "9";
    const expected = 14;
    const actual = Calculator.add(num1, num2);
    expect(expected).to.equal(actual);
  });

  it("Negative test subtract", () => {
    const num1 = "5";
    const num2 = "#*%";
    const actual = Calculator.subtract(num1, num2);
    expect(actual).be.deep.equal(NaN);
  });

  it("Positive test subtract", () => {
    const num1 = "-1";
    const num2 = "-5";
    const expected = 4;
    const actual = Calculator.subtract(num1, num2);
    expect(expected === actual).to.be.true;
  });
  it("Negative test multiply", () => {
    const num1 = "6";
    const num2 = "▩⑳";
    const actual = Calculator.multiply(num1, num2);
    expect(actual).be.deep.equal(NaN);
  });
  it("Positive test multiply", () => {
    const num1 = "6.05";
    const num2 = "3.21";
    const expected = 19.4205;
    const actual = Calculator.multiply(num1, num2);
    expect(expected).to.be.equal(actual);
  });
});
