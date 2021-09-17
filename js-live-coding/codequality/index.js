// // bad

// const withdraw = (clients, balances, names, amount) => {
//   let result = 0;
//   clients.forEach(function (client, index) {
//     if (client.includes(names) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (client.includes(names) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };

// // good

// const withdraw = (clients, balances, clientName, amount) => {
//   let result = 0;
//   clients.forEach(function (client, index) {
//     if (client.includes(clientName) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (client.includes(clientName) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };

// // badd

// function withdraw(clients, balances, client, amount) {
//   let i = 0;
//   for (; i < clients.length; ++i) {
//     if (clients[i] === client) {
//       break;
//     }
//   }

//   balances[i] -= amount;
//   console.log(balances);
//   return balances[i] > 0 ? balances[i] : -1;
// }

// good

function withdraw(clients, balances, client, amount) {
  let i = 0;
  for (; i < clients.length; ++i) {
    if (clients[i] === client) {
      break;
    }
  }

  balances[i] -= amount;
  console.log(balances);
  return balances[i] > 0 ? balances[i] : -1;
}

// bad

// const withdraw = (clients, balances, client, amount) => {
//   let clientNum = clients.indexOf(client);
//   console.log(clientNum);

//   const isEnough = num => {
//     if (num > amount) {
//       return num - amount;
//     }
//     return -1;
//   };
//   const newBalances = balances.map(isEnough);
//   return newBalances[clientNum];
// };

//good
const withdraw = (clients, balances, client, amount) => {
  let clientNum = clients.indexOf(client);

  const isEnough = num => {
    if (num > amount) {
      return num - amount;
    }
    return -1;
  };
  balances[clientNum] -= amount;
  return newBalances[clientNum];
};
// test data
const clients = ['Denis', 'Andrey', 'Jack'];
const balances = [100, 80, 1200];
const client = 'Jack';
const amount = 500;

console.log(withdraw(clients, balances, client, amount));
console.log(balances);

// bad

// bad
// const withdraw = (clients, balances, client, amount) => {
//   //put your code here
//   let ind = clients.indexOf(client);
//   let bal = balances[ind];
//   return bal < amount ? -1 : (balances[ind] -= amount);
// };

//good
const withdraw = (clients, balances, client, amount) => {
  let index = clients.indexOf(client);
  return balances[index] < amount ? -1 : (balances[ind] -= amount);
};

//bad
// function withdraw(clients, balances, client, amount) {
//   let indexOfPerson = clients.indexOf(client);

//   if (balances[indexOfPerson] >= amount) {
//     balances[indexOfPerson] -= amount;
//     return amount;
//   }
//   if (balances[indexOfPerson] < amount) {
//     return -1;
//   }
// }

//good

function withdraw(clients, balances, client, amount) {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] < amount) {
    return -1;
  }
  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}

// bad
function withdraw(clients, balances, client, amount) {
  let output = 0;
  const indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount) {
    output = balances[indexOfPerson] - amount;
    return output;
  }
  output = -1;

  return output;
}

// good

function withdraw(clients, balances, client, amount) {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] < amount) {
    return -1;
  }
  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}

const users = [10, 24, 15, 43];
const res = users.filter(age => age > 18);
console.log(res.length);
