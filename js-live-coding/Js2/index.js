/* eslint-disable no-undef */
// How to work with task

// 1. Learn requirement
// 2. Create step by step algo (& input/output for function)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1. iterate from 2 to num
// 2. check every number if prime
// 2.1 iterate from 2 to N
// 2.2 check if num % index === 0 not prime

// examples
// 9 -->
// step1: 9 / 2
// step2: 9 / 3 ----> not prime
// step3: 9 / 4
// .....

// input: num
// output: undefined

// function getPrimes(num) {
//   for (let index = 2; index < num; index += 1) {
//     console.log('LOOP #1 ' + index);
//     let isPrime = true;
//     //
//     for (let number = 2; number < index; number += 1) {
//       //
//       console.log('LOOP #2 ' + index);
//       if (index % number === 0) {
//         console.log('Not prime ' + index);
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(index);
//     }
//   }
// }

const isPrime = (number) => {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};

function getPrimes(num) {
  for (let index = 2; index < num; index += 1) {
    if (isPrime(index)) {
      console.log(index);
    }
  }
}

getPrimes(110);
