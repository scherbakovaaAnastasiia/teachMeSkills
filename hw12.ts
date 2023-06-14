import { Lada } from "./hw12Car1";
import { Kia } from "./hw12Car2";

const car1 = new Lada(22, 200, 5);
car1.refueling(20);
try {
  car1.refueling(70);
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

const car2 = new Kia(false, 200, 5);
car2.buyCar();
car2.brokenCar = true;
try {
  car2.buyCar();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
