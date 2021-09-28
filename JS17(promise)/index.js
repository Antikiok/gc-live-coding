const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

// input: obj
// undefined

function saveUser(userData) {
  // input: url(string), obj (headers,)
  // output: obj(promise)

  const res = fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(body => console.log(body));
  console.log(res);
}

// test Data

const user = {
  email: 'email@example.com',
  firstName: 'Georg',
  lastName: 'Grigoryan',
  city: 'Kharkov',
  age: 36,
};

saveUser(user);
