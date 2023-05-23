// task 1
function getSum(n: number): number {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum(100));

// task 2
function credit(sum: number): number {
  let overpayment = sum * 0.17 * 5;
  return overpayment;
}
console.log(credit(1000000));

// task 3
function trimString(str: string, from: number, to: number): string {
  return str.slice(from, to);
}
console.log(trimString("Анна ушла гулять в лес", 0, 9));

// task 4
function getSumNumbers(num: number): number {
  let sum = 0;
  let stringNum = num.toString();
  for (let i = 0; i < stringNum.length; i++) {
    sum += +stringNum[i];
  }
  return sum;
}
console.log(getSumNumbers(2028));

// task 5
function getSumBetween(a: number, b: number): number {
  let sum = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  } else if (b < a) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
    return sum;
  } else {
    return a;
  }
}
console.log(getSumBetween(0, -2));

// task 6
function fooboo(b: boolean, func1: Function, func2: Function): void {
  if (b) {
    func1();
  } else {
    func2();
  }
}

function foo(): void {
  console.log("Function foo");
}

function boo(): void {
  console.log("Function boo");
}

fooboo(false, foo, boo);

// task 7
const result = (function factorial(n: number): number {
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
})(6);

console.log(result);
