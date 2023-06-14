// Task 1

// Создайте класс родитель Car и два класса дочерних (любые 2 марки машины), разнесенных по разным модулям.
//Реализуйте несколько методов для этих классов.
//В методах, где принимаются какието параметры, сделайте проверку через условный оператор,
//который в случае неудачи будет выбрасывать исключение. Вызов модулей реализуйте через import, export
import { Car } from "./hw12Parent";

export class Kia extends Car {
  brokenCar: boolean;
  constructor(brokenCar: boolean, speed: number, age: number) {
    super(speed, age);
    this.brokenCar = brokenCar;
  }
  buyCar() {
    if (this.brokenCar) {
      throw new Error(`Купи не битую машину`);
    } else {
      console.log("Вы купили не битую машину");
    }
  }
}
