const express = require("express");
const next = require("next");
const server = express();
const devGGOnline = require("./lib/DevGGOnline");
const getUID = require("./lib/utils/getUID");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

let id;

app.prepare().then(() => {
  devGGOnline(server, port)
    .then((devGG) => {

      devGG.on("connection", (socket) => {
        id = getUID();
        devGG.emit("dev join", id);
        socket.on("disconnect", () => {
          devGG.emit("dev leave", id);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  server.all("*", (req, res) => {
    return handle(req, res);
  });
});
