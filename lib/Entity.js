/** entity Module
 * Main entity entity module.
 */
function Entity(scope, x, y) {
  var entity = this;

  // Create the initial state
  entity.state = {};
  entity.render = () => {
    console.log("Entity Rendering...");
  };
  entity.update = () => {
    console.log("Entity Updating...");
    return;
  };

  return entity;
}
module.exports = new Entity();
