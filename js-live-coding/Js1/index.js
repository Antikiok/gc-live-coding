console.log('Hello');
function returnNumber42() {
  return 42;
}
// console.log(returnNumber42());

function getSquared(number) {
  return number * number;
}

function getSum(firstSum, secondSum) {
  return firstSum + secondSum;
}

// console.log(getSum(-1, 7)); // 6
// console.log(getSum(2, -3)); // -1
// console.log(getSum(2, 5)); // 7

function getMessage(age) {
  return `I am ${age} years old`;
}

// console.log(getMessage(30));

const mult = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(mult(true));

const squared = (number) => number * number;

console.log(squared(5));
console.log(squared(7));

const getMagicNumber = () => 17;

console.log(getMagicNumber());
console.log(getMagicNumber(19));
