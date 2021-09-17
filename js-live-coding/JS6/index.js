/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// input: obj, string, string
// output: obj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
  // put your code here
}

// put your code here

// put your code here

// put your code here

// examples
const transaction = {
  value: 170,
};

console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);

// input: target(obj), source(obj)... source(obj)N,
// output: obj

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
const transaction2 = {
  value: 170,
};

console.log(addPropertyV2(transaction2, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction2);

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}
const transaction3 = {
  value: 170,
};

console.log(addPropertyV3(transaction3, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction3);

// spread

const numbers = [10, 11.18, 7, 0];
console.log(numbers);
console.log(...numbers);

const transactionTest = {
  value: 170,
};

const transactionTestCopy = { ...transactionTest };

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
const transaction4 = {
  value: 170,
};

console.log(addPropertyV4(transaction4, 'currency', 'UAH')); // ==> { value: 170, currency: 'USD' }
console.log(transaction4);

// rest operator
function sum(param1, ...params) {
  console.log(param1);
  console.log(params);
  params.reduce((acc, el) => {
    acc += el;
    return acc;
  });
}

// test data
sum(1, 2, 55, 9, 0);

const numberRest = [1, 2, 55, 9, 0];
function sum(numberRest) {
  const first = [numberRest[0]]
  return numberRest = [first...numberRest]
}
