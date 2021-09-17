/* eslint-disable strict */
/* eslint-disable lines-around-directive */
'use strict';

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {
    this.timerId = setInterval(() => {
      console.log(this);
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);

    // fix context with bind
    //   const callbakcFunc = function () {
    //     console.log(this);

    //     this.secondsPassed += 1;
    //   };
    //   const bindedCallbackFunc = callbakcFunc.bind(this);

    //   setInterval(bindedCallbackFunc, 1000);
  },

  stopTimer() {
    clearInterval(this.timerId);
  },
  getTimer() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },

  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

// context
// 1. know when contex is lost (2-3 cases)
// 2. fix constext

// test data

// // lose constex case #1
// const startTimerFunc = timer.startTimer;
// startTimerFunc();

// // set interval example
// setInterval(() => {
//   console.log('Monday');
// }, 2000);

// lose context case #2

// [1, 2, 4].filter(function () {
//   console.log('filter this ' + this);
// });
