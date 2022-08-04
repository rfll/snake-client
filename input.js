const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, message } = require('./constants');

// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {

  // \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}

if (key === MOVE_UP_KEY) {
  connection.write('Move: up');
}

if (key === MOVE_LEFT_KEY) {
  connection.write('Move: left');
}

if (key === MOVE_DOWN_KEY) {
  connection.write('Move: down');
}

if (key === MOVE_RIGHT_KEY) {
  connection.write('Move: right');
}

if (message[key]) {
  connection.write(message[key]);
}

// if (key === '\o') {
//   connection.write('Say: Ssssmooth criminal');
// }
};

module.exports = {
  setupInput,
}