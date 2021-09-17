// input: object
// output: array of objects

// algo
// 1. необходимо преобразовать многомерный объект в массив объектов
// 2. в массиве объектов - объект ‘customer-id-1’ преобразовать в  значение ключа id:
// (Пример: ‘customer-id-1’{} => {id: ‘customer-id-1’})
// 3. отсортировать в объекте значение ключа ‘age’ по возрастанию

// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => {
//       console.log(arr);

//       let obj = { id: arr[0] };

//       console.log(obj);

//       const value = arr[1];
//       obj = { ...obj, ...value };

//       console.log(obj);
//       return obj;
//     })
//     .sort((a, b) => a.age - b.age);
// };

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(arr => ({ id: arr[0], ...arr[1] }))
//     .sort((a, b) => a.age - b.age);

const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, customers]) => ({ id, ...customers }))
    .sort((a, b) => a.age - b.age);

const customers = {
  'customers-id-1': {
    name: 'William',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 17,
  },
};

console.log(getCustomersList(customers));
console.log();
