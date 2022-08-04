const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', (connect) => {
    console.log(`Successfully connected to the game server`);
    conn.write('Name: MJ');
  });

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

