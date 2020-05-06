export default () => {
  const Game = require("../lib");
  const Player = require("../lib/Player");
  const io = require("socket.io-client");
  const socket = io("http://localhost:3000");

  /**
   * Game INIT
   */
  Game.init(document.body.clientWidth, document.body.clientHeight, 1000, true);

  //Grab Game from Global Scope
  let game = window.game;

  (function createPlayer() {
    game.state.entities = game.state.entities || {};
    game.state.entities.player = new Player(
      Math.floor(100000 + Math.random() * 900000),
      game.constants.width / 2,
      game.constants.height / 2
    );
  })();

  socket.connect();
  socket.io.on("connection", () => {
    console.log("joined");
  });
};
