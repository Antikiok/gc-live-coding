// input: array, func,
// output: array,

// callback
// input: element, index, array,
// output: boolean,

// algo
// 1. create empty array,
// 2. iterate arr
// 3. apply callback for every el
// 4. push el to the res if callback true

// test data

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const callbackFunc = (item) => item > 3;
// OPTION 1
// const filterArrayElements = (arr, callback) => {
//   const res = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const callbackRes = callback(arr[index], index, array);
//     if (callbackRes) {
//       res.push(arr[index]);
//     }
//   }
//   return res;
// };

// const array = [10, 5, 4, 6, 9];

// OPTION2
const filterArrayElements = (arr, callback) => {
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      res.push(arr[index]);
    }
  }
  return res;
};

console.log(filterArrayElements(array, callbackFunc));

// const func = (el, index, arr) => {
//   console.log(`el: ${el}, index: ${index}, arr: ${arr}`);
//   if (el > 7) {
//     return true;
//   } else {
//     return false;
//   }
// };

// 2

const array = [10, 5, 4, 99, 10, 22, 6, 111, 222];

const func = (el, index, arr) => {
  if (arr.length < 5) {
    return true;
  }
  return el > 7;
};
