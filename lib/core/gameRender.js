/** Game Render Module
 * Called by the game loop, this module will
 * perform use the global state to re-render
 * the canvas using new data. Additionally,
 * it will call all game entities `render`
 * methods.
 */
module.exports = function gameRender(Game) {
  // Setup globals
  var w = Game.constants.width,
    h = Game.constants.height;

  return function render() {
    Game.context.clearRect(0, 0, w, h);

    /**
     * Text
     */
    Game.context.font = "1rem Arial";

    /**
     * Show FPS
     */
    // If we want to show the FPS, then render it in the top right corner.
    Game.context.fillStyle = "#fff";
    if (Game.constants.showFps) {
      Game.context.fillText(Game.loop.fps, w - 100, 50);
    }

    // If there are entities, iterate through them and call their `render` methods
    var entities = Game.entities;
    // Loop through entities
    for (var entity in entities) {
      // Fire off each active entities `render` method
      if (!Array.isArray(entities[entity])) {
        entities[entity].render();
      } else {
        for (var ent in entities[entity]) {
          entities[entity][ent].render();
        }
      }
    }
  };
};
