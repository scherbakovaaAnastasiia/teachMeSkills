// task 1
type Iuser = {
  firstName?: string;
  age?: number;
};

const user: Iuser = {
  firstName: "Oleg",
  age: 20,
};

console.log(user);
delete user.age;
delete user.firstName;
console.log(user);

// task 2
const book = {
  name: "Чехов",
  date: 2002,
};

console.log("name" in book);

// task 3
const student = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (const studentKey in student) {
  console.log("Key is " + studentKey);
  // console.log("Value is " + student[studentKey as keyof typeof student]); так бы вывелось ключ-значение
}
for (const studentKey in student) {
  console.log("Value is " + student[studentKey as keyof typeof student]);
}

// task 4
const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

// task 5
let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  alex: 664,
  alexandra: 199,
};
let sum = 0;
let employeeCount = 0;
for (let salariesKey in salaries) {
  employeeCount++;
  sum += salaries[salariesKey as keyof typeof salaries];
}
let averageSalary = sum / employeeCount;
console.log(averageSalary);

// task 6
interface IUser {
  login: string;
  password: string;
}

function login(loginParam: string, passwordParam: string): IUser {
  const user: IUser = {
    login: loginParam,
    password: passwordParam,
  };
  return user;
}

function validate(loginParam: string, passwordParam: string, user: IUser) {
  if (user.login === loginParam && user.password === passwordParam) {
    console.log("Добро пожаловать.");
  } else {
    console.log("Введен неверный логин или пароль");
  }
}
const userTest = login("test1", "qwerty");
console.log(userTest);
validate("test1", "qwert1y", userTest);
