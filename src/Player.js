// /js/players/player.js
var Game = require("../lib/core/game");
var Entity = require("../lib/Entity");
var mathHelpers = require("../lib/utils/utils.math.js");

/** Player Module
 * Main player entity module.
 */
module.exports = function Player(id, x, y) {
  var player = Entity;
  // Create the initial state
  player.state = {
    _id: id,
    _realmID: null,
    hp: 100,
    moveSpeed: 1.5,
    position: {
      x: x,
      y: y,
    },
  };

  // Set up any other constants
  var height = 20,
    width = 20,
    color = player.state._id;

  if (player.state._id == null) player.state._id = id;
  // Draw the player on the canvas
  player.render = function playerRender() {
    Game.context.fillStyle = "#" + color;
    // Game.context.
    Game.context.fillRect(
      player.state.position.x,
      player.state.position.y,
      width,
      height
    );
    let strokeColor = color - 10;
    Game.context.strokeStyle = "#" + strokeColor;
    Game.context.strokeRect(
      player.state.position.x - 2,
      player.state.position.y - 2,
      width + 4,
      height + 4
    );
  };

  // Fired via the global update method.
  // Mutates state as needed for proper rendering next state
  player.update = function playerUpdate() {
    // Check if Game.keys are pressed, if so, update the players position.
    if (Game.keys.isPressed.left) {
      player.state.position.x -= player.state.moveSpeed;
    }

    if (Game.keys.isPressed.right) {
      player.state.position.x += player.state.moveSpeed;
    }

    if (Game.keys.isPressed.up) {
      player.state.position.y -= player.state.moveSpeed;
    }

    if (Game.keys.isPressed.down) {
      player.state.position.y += player.state.moveSpeed;
    }

    // Bind the player to the boundary
    player.state.position.x = player.state.position.x.boundary(
      0,
      Game.constants.width - width
    );
    player.state.position.y = player.state.position.y.boundary(
      0,
      Game.constants.height - height
    );
  };

  return player;
};
