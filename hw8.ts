//task 1
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

//function declaration
function print(value: number) {
  console.log(value);
}
fibonacci.forEach(print);

//arrow function
fibonacci.forEach((value) => {
  console.log(value);
});

//task 2
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
//function declaration
function newStr(value: string, index: number) {
  return `Member ${index + 1}: ${value}`;
}
console.log(users.map(newStr));

//arrow function
const newUsers = users.map((value: string, index: number) => {
  return `Member ${index + 1}: ${value}`;
});
console.log(newUsers);

//task 3
const numbers = [7, -4, 32, -90, 54, 32, -21];
//function declaration
function filterNegative(value: number) {
  return value >= 0;
}

console.log(numbers.filter(filterNegative));

//arrow function
const newNumbers = numbers.filter((value: number) => value >= 0);
console.log(newNumbers);

//task 4
const fibonacci2 = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
//function declaration
function sum(accum: number, value: number) {
  return accum + value;
}
console.log(fibonacci2.reduce(sum));
//arrow function
console.log(fibonacci2.reduce((accum: number, value: number) => accum + value));

//task 5
const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(numbers5.find((value: number) => value % 2 === 0));

//task 6
const numbers6 = [5, 9, 24, 54, 13, 1, 5];
//function declaration
function isDivisible3and5(value: number) {
  return value % 3 === 0 && value % 5 === 0;
}
console.log(numbers6.some(isDivisible3and5));

//arrow function
console.log(
  numbers6.some((value: number) => value % 3 === 0 && value % 5 === 0)
);

//task 7
const numbers7 = [2, 8];
const newNumbers7 = numbers7.every((value: number) => {
  const valuePower = Math.pow(value, 2).toString();
  let sum = 0;
  for (let i = 0; i < valuePower.length; i++) {
    sum += Number(valuePower[i]);
  }
  return sum % 2 === 0;
});
console.log(newNumbers7);

//task 8
let recipeMap = new Map<string, number>([
  ["Огурцы", 300],
  ["Помидоры", 350],
  ["Соль", 10],
  ["Сметана", 110],
  ["Морковь", 50],
]);

recipeMap.forEach((value: number, key: string) => {
  if (value > 100) {
    console.log(key);
  }
});

//task 9
const numbers9 = [
  1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4,
  5, 61, 2, 4, 5, 6, 3, 5,
];
let set = new Set(numbers9);
console.log(set);

//task 10
const numbers10 = ["123"];
let elem2 = "bbb";
let elem3 = "eee";
numbers10.forEach((value, index) => {
  if (index == 1) {
    elem2 = value;
  }
  if (index == 2) {
    elem3 = value;
  }
});
console.log(elem2, elem3);

//task 11
const user = {
  name11: "Петр",
  surname: "Петров",
  age: undefined,
};
let { name11 = "Аноним", surname = "Анонимович", age = "? лет" } = user;
console.log(name11);
console.log(surname);
console.log(age);
