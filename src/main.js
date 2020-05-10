const io = require("socket.io-client");
const socket = io();
const Game = require("../lib");
const createPlayer = require("./createPlayer");
export default () => {
  /**
   * Game INIT
   */
  Game._container = document.getElementById("app");
  Game.init(document.body.clientWidth, document.body.clientHeight);

  Game.state.entities = Game.state.entities || {};
  Game.state.entities.players = [];

  socket.on("dev join", (id) => {
    console.log("Dev Joined", id);

    createPlayer(id);
    console.log(Game.state.entities.players);
  });

  socket.on("dev leave", (id) => {
    console.log("Dev Left", id);

    Game.state.entities.players.filter((ent) => {
      if (ent.state._id === id)
        remove(Game.state.entities.players, () => ent.state._id === id);
    });
    console.log(Game.state.entities.players);
    //Grab Game from Global Scope
  });
};
