// input: obj, obj
// output: boolean
// 1. compare if  number keys in obj1 !== number keys in obj2=>false
// 2. collect keys to arr
// 3. iterate  in obj1  and compare keys:values obj1 with keys:values obj1
// 3.1 if (obj1[key] !== obj2[key]) return false

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let index = 0; index < keys1.length; index += 1) {
//     const key = key1[index];
//     const value1 = keys1[index];
//     const value2 = keys2[index];
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
// }

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.some(key => obj1[key] !== obj2[key]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
  city: 'New York',
};
console.log(Object.entries(obj1));

const obj2 = {
  name: 'Bob',
  age: 17,
  city: 'New York',
};

console.log(compareObjects(obj1, obj2));

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };
// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true
