const numberlist1 = [1, 2, 3, 4, 5];

console.log(numberlist1);

const res1 = numberlist1.pop();
console.log(res1);
console.log(numberlist1);

// ===

const numberlist2 = [1, 2];

console.log('before push ', numberlist2);

const res2 = numberlist2.push();
console.log(res2);

console.log('after push ', numberlist2);

// ===

const numberlist3 = [1, 2, 3, 4, 5];

console.log('before shift ', numberlist3);

const res3 = numberlist3.shift();
console.log(res3);

console.log('after shift ', numberlist3);

const numberlist4 = [1, 2, 3, 4, 5];

console.log('before slice ', numberlist4);

// input: num, num(optional)
// output: array
const res4 = numberlist4.slice(2, 4);
console.log(res4);

console.log('after slice ', numberlist4);

// ===

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

console.log('before filter ', anotherNumbersList);

// input: calback
// output: new array
const res5 = anotherNumbersList.filter();

// function filterCallback(element) {
//   if (element < 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

const filterRes = anotherNumbersList.filter((el) => el > 5);
console.log(filterRes);
console.log('after filter ', anotherNumbersList);

// ===
function sum(from, to, printer) {
  let summ = 0;
  for (let index = from; index < to; index += 1) {
    summ += res;
  }
  printer(summ);
}

function printResult(res) {
  alert(res);
}
