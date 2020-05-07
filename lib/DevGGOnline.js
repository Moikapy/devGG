module.exports = async function devGGOnline(server, port) {
  try {
    var http = require("http").createServer(server);
    var devGG = require("socket.io")(http);
    http.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
    throw error
  }
  return devGG;
};
