/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

function printMessage(country, city) {
  console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// printMessage('Ukraine', 'Lviv');

// input context, arg1 ... argN
// output: func (with new context)

// // option 1
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Ukraine', 'Lviv');

// // option 2
// const printMessageBinded2 = printMessage.bind(user, 'UK', 'London');
// printMessageBinded2('France', 'Paris');

// // option 3
// const printMessageBinded3 = printMessage.bind(user, 'Poland');
// printMessageBinded3('Warsaw');

//------------------------------

// input func, context, arg1 ... argN
// output: func (with new context)

function myBind(func, context, ...args) {
  // call
  // input context, arg1 ...argN
  // output: func result

  // input the same as func
  // output: func result
  return function (...funcArgs) {
    func.call(context, ...args, ...funcArgs);
  };
}

// test data

myBind(printMessage, user, 'USA', 'Washington');

const getMyBind = myBind(printMessage, user, 'Germany', 'Berlin');
getMyBind();

const getMyBind2 = myBind(printMessage, user, 'CZ');
getMyBind2('Praha');
