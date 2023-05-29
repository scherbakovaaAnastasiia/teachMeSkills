//task 1
const colors = ["red", "green", "blue"];
console.log(colors.length);

//task 2
const animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]);
//второй способ для маленького массива
animals.reverse();
console.log(animals[0]);

//task 3
const numbers = [5, 43, 63, 23, 90];
//first
numbers.splice(0, numbers.length);
console.log(numbers);

//second
const numbersLength = numbers.length;
for (let i = 0; i < numbersLength; i++) {
  numbers.pop();
}
console.log(numbers);

// third
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

//task 4
const students = ["Polina", "Dasha", "Masha"];
students.splice(students.length - 1, 1, "Borya");
// students.pop();
// students.push("Borya");
students.splice(0, 1, "Andrey");
// students.shift();
// students.unshift("Andrey");
console.log(students);

//task 5
const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

for (const cat of cats) {
  console.log(cat);
}

//task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const evenOddNumbers = evenNumbers.concat(oddNumbers);
console.log(evenOddNumbers.indexOf(8));

//task 7
const binary = [0, 0, 0, 0];
console.log(binary.join("1"));
