// bad option
// const createLogger = () => {
//   const memory = [];

//   function warn(text) {
//     const warnObj = {
//       message: text,
//       dateTime: new Date(),
//       type: 'warn',
//     };
//     memory.push(warnObj);
//   }
//   function error(text) {
//     const errorObj = {
//       message: text,
//       dateTime: new Date(),
//       type: 'error',
//     };
//     memory.push(errorObj);
//   }
//   function log(text) {
//     const logObj = {
//       message: text,
//       dateTime: new Date(),
//       type: 'log',
//     };
//     memory.push(logObj);
//   }
//   function getRecords(type = 'none') {
//     if (type !== 'none') {
//       const getmemory = memory.filter(element => {
//         if (element.type === type) {
//           return element;
//         }
//       });
//       return getmemory.sort((a, b) => b.dateTime - a.dateTime);
//     }
//     return memory.sort((a, b) => b.dateTime - a.dateTime);
//   }
//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// };

const createLogger = () => {
  const memory = [];

  function warn(text) {
    pusher(text, 'warn');
  }
  function error(text) {
    pusher(text, 'error');
  }
  function log(text) {
    pusher(text, 'log');
  }
  function pusher(text, type) {
    memory.push({
      message: text,
      dateTime: new Date(),
      type,
    });
  }

  function getRecords(type = 'none') {
    const records = type ? memory.filter(element => element.type === type) : memory;
    return records.sort((a, b) => b.dateTime - a.dateTime);
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger = createLogger();
logger.log('User was logged in');
logger.warn('User try  to restricted this page');
logger.log('User was logged out');
logger.error('Unexpected error on this web-site');
console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
console.log(logger.getRecords());

// const logger1 = createLogger();
// logger1.erorr('some erorr');
// logger1.log('some log');
// console.log(logger1.getRecords());
// //

// const logger2 = createLogger();
// logger2.error('unexpected error');
// console.log(logger2.getRecords());

// //
