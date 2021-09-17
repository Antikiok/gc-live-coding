const numbersList = [5, 0, 8, 10, -4, 50, 220];

console.log('numberList before map', numbersList);

// input: func, obj (optional)
// output: array

// calback
// input: number, index (optional), array (optional)
// output: number

// option1
// const mapRes = numberlist.map((function (el) {
//   return el * el;
// });

const mapRes = numberList.map((el) => el * el);

// console.log(mapRes);
// console.log('numberList after map', numbersList);

// FOREACH

// input: callback, obj(optional)
// output: undefined

// calback
// input: number, index (optional), array (optional)
// output: undefined

const result = numbersList.forEach((el) => {
  if (el >= 0) {
    console.log(el);
  }
});

// input: callback
// output: el, undefined

// OPTION 1
// numbersList.find((el) => {
//   if (el % 2 === 0 && el > 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// OPTION 2

numbersList.find((el) => el % 2 === 0 && el > 0);

// REDUCE

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, number (acc initial value, optional)
// number

// callback;
// input acc (number), number. index (optional), array (optional)
// output: number

const reduceRes = transactions.reduce((acc, res) => {
  acc += element;
  return acc;
});

console.log(reduceRes);
