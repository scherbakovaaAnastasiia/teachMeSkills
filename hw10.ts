// Task 1
// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar.
//Конструкт родительского класса принимает переменные марку авто и тип двигателя.
//Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто.
//Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>.
//Approximetly cost of the car is <carCost>`. (В задании используйте не только public модификатор, где это возможно)
class Car {
  constructor(protected carName: string, protected engineType: string) {}
}

class SportCar extends Car {
  constructor(
    carName: string,
    engineType: string,
    private maxSpeed: number = 350,
    private carCost: number = 5000000
  ) {
    super(carName, engineType);
    this.maxSpeed = maxSpeed;
    this.carCost = carCost;
  }
  sayAboutCar() {
    return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`;
  }
}

class LuxuryCar extends Car {
  constructor(
    carName: string,
    engineType: string,
    private maxSpeed: number = 200,
    private carCost: number = 7000000
  ) {
    super(carName, engineType);
    this.maxSpeed = maxSpeed;
    this.carCost = carCost;
  }
  sayAboutCar() {
    return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`;
  }
}
const subaru = new SportCar("Subaru BRZ", "Mechanic");
const rollsRoyce = new LuxuryCar("Rolls-Royce Ghost", "Automatic");
console.log(subaru.sayAboutCar());
console.log(rollsRoyce.sayAboutCar());

// Task 2
// Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`.
//И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя
const person1 = {
  name: "Anna",
};
const person2 = {
  name: "Oleg",
};
function sayHello(): void {
  console.log(`My name is ${this.name}`);
}
sayHello.call(person1);
sayHello.call(person2);

// Task 3
// Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль.
//В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах.
// К примеру `This car has 3 doors and this is left-hand drive car`
const car1 = {
  door: 5,
  steeringWheel: "left-hand",
};
const car2 = {
  door: 3,
  steeringWheel: "right-hand",
};
function sayInfo(): void {
  console.log(
    `This car has ${this.door} doors and this is ${this.steeringWheel} drive car`
  );
}
sayInfo.apply(car1);
sayInfo.apply(car2);
