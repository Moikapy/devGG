const express = require("express");
const next = require("next");
const server = express();
const devGGOnline = require("./lib/DevGGOnline");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  devGGOnline(server, port)
    .then((devGG) => {
      let gameWindow = null;
      devGG.on("connection", (socket) => {
        const id = Math.floor(100000 + Math.random() * 900000);

        socket.on("game init", (game) => {
          gameWindow = game;
          console.log("repeat");
          // if(gameWindow == null)devGG.emit("game start", gameWindow);
        });

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
