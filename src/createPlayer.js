module.exports = function createPlayer(id) {
  const Player = require("../lib/Player");
  let player = new Player(
    id,
    game.constants.width / 2,
    game.constants.height / 2
  );
  game.state.entities.players.push(player);
};
