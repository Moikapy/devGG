/** Game Update Module
 * Called by the game loop, this module will
 * perform any state calculations / updates
 * to properly render the next frame.
 */
module.exports = function gameUpdate(scope) {
  return function update(tFrame) {
    // var state = scope.state || {};
    var entities = scope.entities || {};
    // If there are entities, iterate through them and call their `update` methods
    // if (state.hasOwnProperty("entities")) {
    // Loop through entities
    for (var entity in entities) {
      // Fire off each active entities `render` method
      if (!Array.isArray(entities[entity])) {
        entities[entity].update();
      } else {
        for (var ent in entities[entity]) {
          entities[entity][ent].update();
        }
      }
    }
    // }

    return entities;
  };
};
