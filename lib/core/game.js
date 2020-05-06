/**
 * Imports
 */
const gameLoop = require("./gameLoop");
const gameRender = require("./gameRender");
const gameUpdate = require("./gameUpdate");
const cUtils = require("../utils/utils.canvas");
/**
 * Init _container Element
 */
const _container = document.getElementById("app");
/**
 * @Function Game
 * @param w - Width
 * @param h - Height
 * @param targetFps - The Max FPS of Game
 * @param showFps - Sets if Player FPS is Shown
 */
module.exports = (function Game(w, h, targetFps, showFps) {
  /**
   * Constants
   */
  var that = this;

  this.constants = {
    width: w,
    height: h,
    targetFps: targetFps,
    showFps: showFps,
  };
  /**
   * State
   */
  this.state = {};

  function beginGame() {
    that.viewport = cUtils.generateCanvas(w, h);
    that.viewport.id = "gameViewport";

    that.context = that.viewport.getContext("2d");

    //Append the canvas node to the container
    _container.insertBefore(that.viewport, _container.firstChild);

    // Instantiate core modules with the current scope
    that.update = gameUpdate(that);
    that.render = gameRender(that);
    that.loop = gameLoop(that);
  }

  this.init = (width, height, fps, showFps) => {
    /**
     * Init Game to to Global Scope
     */
    window.isInit = true;

    window.game = new Game(width, height, fps, showFps);
  };
  if (window.isInit) beginGame();
  return this;
})();
