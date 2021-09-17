// input: string[], value
// output: obj

// algo
// reduce

// algo
// 1. create res obj
// 2. iterate key list
// 3. get value by index
// 4. add key value to object

// option bad
// function buildObject(keysList, valuesList) {
//   let obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj = { ...obj, [keysList[index]]: valuesList[index] };
//   }
//   return obj;
// }

// option good
const buildObject = (keysList, valuesList) =>
  keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }

console.log(result);
