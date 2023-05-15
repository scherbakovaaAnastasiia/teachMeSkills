const iLearn = "я учу typescript!";

// task 1
const firtsName = "Anastasia";
const lastName = "Shcherbakova";
console.log("Привет " + firtsName + " " + lastName);
console.log("Привет " + firtsName.toLowerCase() + " " + lastName); // нижний регистр
console.log("Привет " + firtsName + " " + lastName.toUpperCase()); // верний регистр
console.log(`Привет ${firtsName.toLowerCase()} ${lastName.toLowerCase()}`);
console.log(`Привет ${firtsName.toUpperCase()} ${lastName.toUpperCase()}`);

// task 2
function checkWord(sentence: string, word: string) {
  if (sentence.includes(word)) {
    return sentence.indexOf(word);
  } else {
    return "Данной подстроки нет";
  }
}
console.log(checkWord(iLearn, "я"));

// task 3
const randomSentence = "dhdfh cbcvb";
function positionSymbol(position: number, sentence: string) {
  if (sentence.charAt(position)) {
    return position + " is a symbol " + sentence.charAt(position);
  } else {
    return "Вы вышли за границу строки";
  }
}
console.log(positionSymbol(4, randomSentence));

// task 4
const sentence4 = "fdg fdhdfh.";
function finishSentence(sentence: string) {
  if (sentence.endsWith(".")) {
    return "Данное предложение закончено";
  } else {
    return "В конце предложения не хватает точки";
  }
}
console.log(finishSentence(sentence4));

// task 5
console.log(iLearn.substring(0, 1), iLearn.substring(16));
console.log(iLearn.slice(0, 1), iLearn.slice(16));

// task 6
console.log(iLearn.split(" "));

// task 7
const sentence7 = " я учу typescript! ";
console.log(sentence7.trim());

// task 8
const n = 8.829734872948;
console.log(n.toFixed(3));

// task 9
function checkInt(n: number) {
  if (Number.isInteger(n)) {
    return n;
  } else {
    return Math.round(n);
  }
}
console.log(checkInt(435.645));

// task 10
const n1 = 564.745;
console.log(Math.floor(n1));
console.log(Math.ceil(n1));
console.log(Math.round(n1));

// task 11
function exponent(num: number, degree: number) {
  return Math.pow(num, degree);
}
console.log(exponent(3, 4));

// task 12
function randomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}
console.log(randomNumber(3, 40));

// task 13
function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
console.log(randomFloat(3, 40));

// task 14
const date: Date = new Date();
console.log(
  "текущая дата: " +
    date.getMonth() +
    "/" +
    date.getFullYear() +
    "/" +
    date.getDate() +
    ".Текущее время " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    "."
);
