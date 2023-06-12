// Task 1

// Создайте класс родитель Car и два класса дочерних (любые 2 марки машины), разнесенных по разным модулям.
//Реализуйте несколько методов для этих классов.
//В методах, где принимаются какието параметры, сделайте проверку через условный оператор,
//который в случае неудачи будет выбрасывать исключение. Вызов модулей реализуйте через import, export
import { Car } from "./hw12Parent";

export class Lada extends Car {
  amountOfFuel: number;
  constructor(amountOfFuel: number, speed: number, age: number) {
    super(speed, age);
    this.amountOfFuel = amountOfFuel;
  }
  refueling(ref: number) {
    if (ref < 0 || ref > 55) {
      throw new Error(`Выбери другое количестов топлива`);
    } else {
      this.amountOfFuel += ref;
      console.log(`Заправлено ${ref} литров`);
    }
  }
}
