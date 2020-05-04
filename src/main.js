const Game = require("../lib");
const Player = require("../lib/Player");
const game = Game;
var createPlayer = (function createPlayer() {
  game.state.entities = game.state.entities || {};
  game.state.entities.player = new Player(
    game,
    game.constants.width / 2,
    game.constants.height - 100
  );
})();
