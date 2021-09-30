const loginForm = querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');
const serverUrl = `https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`;
const validateFormHandler = event => {
  if (loginForm.reportValidity()) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
};
loginForm.addEventListener('input', validateFormHandler);

// algo
// read form - get user info +++
// send data to server
// handle server response

const createUserHandler = event => {
  event.preventDefault();

  // 1
  // BAD
  //   const user = {
  //     email: null,
  //     name: null,
  //     password: null,
  //   };

  // 2
  // good
  const user = Object.fromEntries(new FormData(loginForm));

  fetch(serverUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usersData),
  })
    .then(response => response.json())
    .then(body => {
      loginForm.reset();
      alert(JSON.stringify(body));
    })
    .catch(() => (errorText.textContent = 'Failed to create user'));
};
loginForm.addEventListener('submit', sumbitCreatedUser);
