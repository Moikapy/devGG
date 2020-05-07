/** Game Render Module
 * Called by the game loop, this module will
 * perform use the global state to re-render
 * the canvas using new data. Additionally,
 * it will call all game entities `render`
 * methods.
 */
module.exports = function gameRender(scope) {
  // Setup globals
  var w = scope.constants.width,
    h = scope.constants.height;
  return function render() {
    scope.context.clearRect(0, 0, w, h);

    /**
     * Text
     */
    scope.context.font = "1rem Arial";
    // scope.context.fillStlye = "#fff";
    // scope.context.fillText("Beware Dragons Ahead...", 5, 50);

    /**
     * Show FPS
     */
    // If we want to show the FPS, then render it in the top right corner.
    scope.context.fillStyle = "#fff";
    if (scope.state.entities.players !== undefined) {
      scope.context.fillText(`Online: ${scope.state.entities.players.length}`, w / 2, 50);
    }
    if (scope.constants.showFps) {
      scope.context.fillText(scope.loop.fps, w - 100, 50);
    }

    // If there are entities, iterate through them and call their `render` methods
    if (scope.state.hasOwnProperty("entities")) {
      var entities = scope.state.entities;
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
    }
  };
};
