const Game = require("../lib");
const Player = require("../lib/Player");
var createPlayer = (function createPlayer() {
  Game.state.entities = Game.state.entities || {};
  Game.state.entities.player = new Player(
    Game,
    Game.constants.width / 2,
    Game.constants.height - 100
  );
  Game.state.entities.player;
})();
