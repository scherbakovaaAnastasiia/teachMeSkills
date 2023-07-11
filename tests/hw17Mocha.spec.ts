// - Реализовать класс калькулятор, который принимает имеет несколько методов (сложение, вычитание, умножение, деление, и еще любой/любые на выбор) и принимает 2 параметра: 2 цифры и операция
// - Написать по 10 положительных и отрицательных тестов для каждого варианта:
// 	- Mocha
// 	- Mocha + chai
// 	- Jest
import assert from "assert";
import { Calculator } from "../hw16";
describe("Test calculator", function () {
  it("Negative test add", function () {
    const num1 = "5";
    const num2 = "fgdfg";
    const actual = Calculator.add(num1, num2);
    assert.equal(actual, NaN);
  });

  it("Positive test add", function () {
    const num1 = "5";
    const num2 = "9";
    const expected = 14;
    const actual = Calculator.add(num1, num2);
    assert.equal(expected, actual);
  });

  it("Negative test subtract", function () {
    const num1 = "5";
    const num2 = "#*%";
    const actual = Calculator.subtract(num1, num2);
    assert.equal(actual, NaN);
  });

  it("Positive test subtract", function () {
    const num1 = "-1";
    const num2 = "-5";
    const expected = 4;
    const actual = Calculator.subtract(num1, num2);
    assert.equal(expected, actual);
  });
  it("Negative test multiply", function () {
    const num1 = "6";
    const num2 = "▩⑳";
    const actual = Calculator.multiply(num1, num2);
    assert.equal(actual, NaN);
  });
  it("Positive test multiply", function () {
    const num1 = "6.05";
    const num2 = "3.21";
    const expected = 19.4205;
    const actual = Calculator.multiply(num1, num2);
    assert.equal(expected, actual);
  });
});
