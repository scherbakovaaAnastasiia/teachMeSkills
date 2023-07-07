// - Реализовать класс калькулятор, который принимает имеет несколько методов (сложение, вычитание, умножение, деление, и еще любой/любые на выбор) и принимает 2 параметра: 2 цифры и операция
// - Написать 10 положительных и отрицательных тестов (методов) по вызову данных функции, которые в зависимости от переданных аргументов и ожидаемого результата выводит либо: что "тест" прошел, либо что "тест" свалился
import { Calculator } from "./hw16";

export class CalculatorTests {
  static negativeTestAdd() {
    const num1 = "5";
    const num2 = "fgdfg";

    const actual = Calculator.add(num1, num2);
    if (isNaN(actual)) {
      console.log("Негативный тест на сумму прошел");
    } else {
      console.log("Негативный тест на сумму свалился");
    }
  }

  static positiveTestAdd() {
    const num1 = "5";
    const num2 = "9";
    const expected = 14;

    const actual = Calculator.add(num1, num2);
    if (expected === actual) {
      console.log("Позитивный тест на сумму прошел");
    } else {
      console.log("Позитивный тест на сумму свалился");
    }
  }

  static negativeTestSubtract() {
    const num1 = "5";
    const num2 = "#*%";

    const actual = Calculator.subtract(num1, num2);
    if (isNaN(actual)) {
      console.log("Негативный тест на разницу прошел");
    } else {
      console.log("Негативный тест на разницу свалился");
    }
  }

  static positiveTestSubtract() {
    const num1 = "-1";
    const num2 = "-5";
    const expected = 4;

    const actual = Calculator.subtract(num1, num2);
    if (expected === actual) {
      console.log("Позитивный тест на разницу прошел");
    } else {
      console.log("Позитивный тест на разницу свалился");
    }
  }

  static negativeTestMultiply() {
    const num1 = "6";
    const num2 = "▩⑳";

    const actual = Calculator.multiply(num1, num2);
    if (isNaN(actual)) {
      console.log("Негативный тест на умножение прошел");
    } else {
      console.log("Негативный тест на умножение свалился");
    }
  }

  static positiveTestMultiply() {
    const num1 = "6.05";
    const num2 = "3.21";
    const expected = 19.4205;

    const actual = Calculator.multiply(num1, num2);
    if (expected === actual) {
      console.log("Позитивный тест на умножение прошел");
    } else {
      console.log("Позитивный тест на умножение свалился");
    }
  }

  static negativeTestDivide() {
    const num1 = "5";
    const num2 = "0";
    try {
      Calculator.divide(num1, num2);
      console.log("Негативный тест на деление на 0 провален");
    } catch (error) {
      console.log("Негативный тест на деление на 0 прошел");
    }
  }

  static positiveTestDivide() {
    const num1 = "2";
    const num2 = "4";
    const expected = 0.5;

    const actual = Calculator.divide(num1, num2);
    if (expected === actual) {
      console.log("Позитивный тест на деление прошел");
    } else {
      console.log("Позитивный тест на деление свалился");
    }
  }

  static negativeTestRemainderOfDivision() {
    const num1 = 6;
    const num2 = 3;
    const expected = 0;
    const actual = Calculator.remainderOfDivision(num1, num2);
    if (expected === actual) {
      console.log("Негативный тест на деление с остатком пройден");
    } else {
      console.log("Негативный тест на деление с остатком свалился");
    }
  }

  static positiveTestRemainderOfDivision() {
    const num1 = 6;
    const num2 = 4;
    const expected = 2;
    const actual = Calculator.remainderOfDivision(num1, num2);
    if (expected === actual) {
      console.log("Позитивный тест на деление с остатком пройден");
    } else {
      console.log("Позитивный тест на деление с остатком свалился");
    }
  }
}
