
var Game = require('../lib/core/game')
const Player = require("./Player");

module.exports = function createPlayer(id) {
  console.log(Game)
  let player = new Player(
    id,
    Game.constants.width / 2,
    Game.constants.height / 2
  );
  Game.state.entities.players.push(player);
};
