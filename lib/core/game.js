/**
 * Imports
 */
var entityManager = require("./entityManager");
const gameLoop = require("./gameLoop");
const gameRender = require("./gameRender");
const gameUpdate = require("./gameUpdate");
const cUtils = require("../utils/utils.canvas");
const keys = require("../utils/utils.keymap");
/**
 * @Function Game
 * @param w - Width
 * @param h - Height
 * @param targetFps - The Max FPS of Game
 * @param showFps - Sets if Player FPS is Shown
 */
let Game = {
  _container: null,
  window: null,
  document: null,
  state: {},
  constants: {
    width: 800,
    height: 600,
    targetFps: 60,
    showFps: true,
  },
  _setConstants(w, h, fps, showFps) {
    this.constants = {
      width: w || this.constants.window,
      height: h || this.constants.height,
      targetFps: fps || this.constants.targetFps,
      showFps: showFps || this.constants.showFps,
    };
  },
  init(w, h, fps, showFps) {
    this.window = window;
    this.document = document;
    this._setConstants(w, h, fps, showFps);
    this.viewport = cUtils.generateCanvas(
      w || this.constants.width,
      h || this.constants.height
      );
      this.viewport.id = "gameViewport";
      this.context = this.viewport.getContext("2d");
      this.update = gameUpdate(this);
      this.render = gameRender(this);
      this.loop = gameLoop(this);
      this.keys = keys(this);
      this.entities = entityManager(this);
      this._container.insertBefore(this.viewport, this._container.firstChild);
  },
};
module.exports = Game;
