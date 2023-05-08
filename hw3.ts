// task 1
let x = 20;
let y = 58;
let z = 42;
let xyz = x + y + z;
console.log(xyz);

// task 2
let secInMin = 60;
let minInHour = 60;
let hourInDay = 24;
let dayInYear = 365;
let age = 25;
let myAgeInSeconds = age * dayInYear * hourInDay * minInHour * secInMin;
console.log(myAgeInSeconds);

// task 3
let count = 42;
let userName = "42";
let counstString = count.toString();
console.log(typeof counstString);
let counst2String = String(count);
console.log(typeof counst2String);
console.log(counst2String);
let userNameNumber = +userName;
console.log(typeof userNameNumber);
let userNameNumber2 = Number(userName);
console.log(typeof userNameNumber2);
console.log(userNameNumber2);

// task 4
let a = 1;
let b = 2;
let c = "белых медведей";
let abc = a + (b + " " + c);
console.log(abc);

// task 5
let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";
let sum = word1 + word2 + word3 + word4 + word5;
let lengthWords = 0;
while (sum[lengthWords]) {
  lengthWords++;
}
console.log(lengthWords);

// task 6
let one = 1;
let two = "Строка";
let three = true;
console.log("Variable: one have type: " + typeof one);
console.log("Variable: two have type: " + typeof two);
console.log("Variable: three have type: " + typeof three);

// task 7
let number1 = "true";
let number2 = false;
let number3 = 17;
let number4 = undefined;
let number5 = null;
console.log(
  `${typeof number1}, ${typeof number2}, ${typeof number3}, ${typeof number4}, ${typeof number5} `
);

// task 8
let height = 15;
let width = 20;
if (height > width) {
  console.log(height);
} else console.log(width);
// second way
console.log(height > width ? height : width);

// task 9
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// task 10
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

// task 11
let number0 = 9;
if (number0 % 3 == 0 && number0 % 5 == 0) {
  console.log("FizBuz");
} else if (number0 % 3 == 0) {
  console.log("Buz");
} else if (number0 % 5 == 0) {
  console.log("Fiz");
}

// task 12
let ageUser = 17;
if (ageUser > 18) {
  console.log("Попей пивка");
} else {
  console.log("Пей колу");
  if (16 <= ageUser && ageUser <= 18) {
    console.log("Можешь выкурить сигаретку, только маме не говори");
  }
}

// task 13
let tourist = "north";
let south = "на юг пойдешь счастье найдешь";
let north = "на север пойдешь много денег найдешь";
let west = "на запад пойдешь верного друга найдешь";
let east = "на восток пойдешь разработчиком станешь";
switch (tourist) {
  case "south":
    console.log(south);
    break;
  case "north":
    console.log(north);
    break;
  case "west":
    console.log(west);
    break;
  case "east":
    console.log(east);
    break;
  default:
    console.log("Попробуйте еще раз");
}

///// ADVANCED level //////
// task 1
let a1 = 4;
let b1 = 3;
[a1, b1] = [b1, a1];
console.log(a1, b1);

// task 3
for (let i = 0; i < 6; i++) {
  let g = "";
  for (let j = 0; j < i + 1; j++) {
    g = g + "#";
  }
  console.log(g);
}
