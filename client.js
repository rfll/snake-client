const net = require("net");

const connect = function () {

  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on('connect', (connect) => {
    console.log(`Successfully connected to the game server`);
    conn.write('Name: MJ');
  });

  // conn.on('connect', (connect) => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 100);
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 200);
  //   setInterval(() => {
  //     conn.write('Move: right');
  //   }, 300);
  //   setInterval(() => {
  //     conn.write('Move: right');
  //   }, 400);
  // });

  conn.on('data', (data) => {
    // code that does something when the connection is first established
    process.stdout.write(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};

// module.exports = connect();

