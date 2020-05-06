const express = require("express");
const next = require("next");
const server = express();
var http = require("http").createServer(server);
var io = require("socket.io")(http);


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

  io.on("connection", (socket) => {
    console.log("a user connected");
  });


  server.all("*", (req, res) => {
    return handle(req, res);
  });

  http.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
