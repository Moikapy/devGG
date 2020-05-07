// /js/players/player.js
var Entity = require("./Entity");
var keys = require("./utils/utils.keymap"),
  mathHelpers = require("./utils/utils.math.js");

/** Player Module
 * Main player entity module.
 */
module.exports = function Player(id,x, y) {
  console.log("Spawning Player");
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
  console.log(player.state._id)
  if(player.state._id == null)player.state._id=id
  // Draw the player on the canvas
  player.render = function playerRender() {
    window.game.context.fillStyle = "#" + color;
    // window.game.context.
    window.game.context.fillRect(
      player.state.position.x,
      player.state.position.y,
      width,
      height
    );
    let strokeColor = color - 10;
    window.game.context.strokeStyle = "#" + strokeColor;
    window.game.context.strokeRect(
      player.state.position.x - 2,
      player.state.position.y - 2,
      width + 4,
      height + 4
    );
  };

  // Fired via the global update method.
  // Mutates state as needed for proper rendering next state
  player.update = function playerUpdate() {
    // Check if keys are pressed, if so, update the players position.
    if (keys.isPressed.left) {
      player.state.position.x -= player.state.moveSpeed;
    }

    if (keys.isPressed.right) {
      player.state.position.x += player.state.moveSpeed;
    }

    if (keys.isPressed.up) {
      player.state.position.y -= player.state.moveSpeed;
    }

    if (keys.isPressed.down) {
      player.state.position.y += player.state.moveSpeed;
    }

    // Bind the player to the boundary
    player.state.position.x = player.state.position.x.boundary(
      0,
      window.game.constants.width - width
    );
    player.state.position.y = player.state.position.y.boundary(
      0,
      window.game.constants.height - height
    );
  };

  return player;
};
