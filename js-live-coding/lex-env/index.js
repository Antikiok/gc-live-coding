/* eslint-disable */

/* 
{
  //global
  'environmentRecord': {
    'message': 'Test,
    'weight': '55',
    'createMessager': 'func'
    ...
  }
  'outherLexicalEnv': null

  // createMessenger

   'environmentRecord': {
    'message': 'Just learn it,
    'sender': 'Gromcode',
    'sendMessage': 'func'
    
  }
  'outherLexicalEnv': global

  //run
    'environmentRecord': { }
    'outherLexicalEnv': global
  //sendMessage
    'environmentRecord': { }
    'outherLexicalEnv': createMessenger

}


// Create
*/

const message = 'test message';
const weight = 55;

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

if (true) {
  console.log(message);
}

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
messanger1.setSender('Nova poshta');
messanger1.sendMessage('Andrey');

const messanger2 = createMessenger();
messanger2.setSender('Rozetka');
messanger2.sendMessage('Denis');
const messanger3 = createMessenger();
run();
console.log('Hello');
