// - Реализовать класс калькулятор, который принимает имеет несколько методов (сложение, вычитание, умножение, деление, и еще любой/любые на выбор) и принимает 2 параметра: 2 цифры и операция
// - Написать 10 положительных и отрицательных тестов (методов) по вызову данных функции, которые в зависимости от переданных аргументов и ожидаемого результата выводит либо: что "тест" прошел, либо что "тест" свалился

export class Calculator {
  static add(num1: string, num2: string) {
    const n1 = Number(num1);
    const n2 = Number(num2);
    return n1 + n2;
  }

  static subtract(num1: string, num2: string) {
    const n1 = Number(num1);
    const n2 = Number(num2);
    return n1 - n2;
  }

  static multiply(num1: string, num2: string) {
    const n1 = Number(num1);
    const n2 = Number(num2);
    return n1 * n2;
  }

  static divide(num1: string, num2: string) {
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (n2 === 0) {
      throw new Error("Попытка деления на 0");
    }
    return n1 / n2;
  }

  static remainderOfDivision(num1: number, num2: number) {
    return num1 % num2;
  }
}
