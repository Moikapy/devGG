module.exports = function entityManager(scope) {
  var entities = scope.entities || {};
  scope.initEntity = (key, v) => {
    if (entities[key] == undefined) entities[key] = v;
    return entities[key];
  };
  scope.getEntity = (key) => {
    return entities[key];
  };
  scope.addEntity = (key, v) => {
    if (Array.isArray(entities[key])) {
      entities[key] = [...entities[key], v];
      return entities[key];
    }
    console.log(typeof entities[key]);
  };
  return entities;
};
