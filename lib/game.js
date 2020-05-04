/**
 * Imports
 */
const gameLoop = require("./gameLoop");
const gameRender = require("./gameRender");
const gameUpdate = require("./gameUpdate");
const cUtils = require("./utils/utils.canvas");
/**
 * Init _container Element
 */
const _container = document.getElementById("app");
/**
 * Game Function
 */
function Game(w, h, targetFps, showFps) {
  /**
   * Constants
   */
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

  this.viewport = cUtils.generateCanvas(w, h);
  this.viewport.id = "gameViewport";

  this.context = this.viewport.getContext("2d");

  //Append the canvas node to the container
  _container.insertBefore(this.viewport, _container.firstChild);

  // Instantiate core modules with the current scope
  this.update = gameUpdate(this);
  this.render = gameRender(this);
  this.loop = gameLoop(this);




  return this;
}
/**
 * Init Game to to Global Scope
 */
window.game = new Game(800, 600, 60, true);

/**
 * Export Game as a Module
 */
module.exports = game;
