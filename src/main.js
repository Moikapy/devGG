export default () => {
  const Game = require("../lib");
  /**
   * Game INIT
   */
  Game.init(document.body.clientWidth, document.body.clientHeight, 1000, true);
};
