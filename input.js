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

if (key === '\w') {
  connection.write('Move: up');
}

if (key === '\a') {
  connection.write('Move: left');
}

if (key === '\s') {
  connection.write('Move: down');
}

if (key === '\d') {
  connection.write('Move: right');
}

if (key === '\p') {
  connection.write('Say: Billy Jean issssss');
}

if (key === '\o') {
  connection.write('Say: Ssssmooth criminal');
}

if (key === '\i') {
  connection.write('Say: Jusssst beat it');
}
};

module.exports = {
  setupInput,
}