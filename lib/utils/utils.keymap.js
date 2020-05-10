/** keysDown Utility Module
 * Monitors and determines whether a key
 * is pressed down at any given moment.
 * Returns getters for each key.
 */
module.exports = function keymap(scope) {
  // Set isPressed to an empty object
  this.isPressed = {};

  var left, right, up, down;
  // Set up `onkeydown` event handler.
  scope.document.onkeydown = (ev) => {
    if (ev.keyCode === 68) {
      right = true;
      // console.log(isPressed)
    }
    if (ev.keyCode === 65) {
      left = true;
    }
    if (ev.keyCode === 87) {
      up = true;
    }
    if (ev.keyCode === 83) {
      down = true;
    }
  };

  // Set up `onkeyup` event handler.
  scope.document.onkeyup = function (ev) {
    if (ev.keyCode === 68) {
      right = false;
    }
    if (ev.keyCode === 65) {
      left = false;
    }
    if (ev.keyCode === 87) {
      up = false;
    }
    if (ev.keyCode === 83) {
      down = false;
    }
  };

  // Define getters for each key
  // * Not strictly necessary. Could just return
  // * an object literal of methods, the syntactic
  // * sugar of `defineProperty` is just so much sweeter :)
  Object.defineProperty(this.isPressed, "left", {
    get: function () {
      return left;
    },
    configurable: true,
    enumerable: true,
  });

  Object.defineProperty(this.isPressed, "right", {
    get: function () {
      return right;
    },
    configurable: true,
    enumerable: true,
  });

  Object.defineProperty(this.isPressed, "up", {
    get: function () {
      return up;
    },
    configurable: true,
    enumerable: true,
  });

  Object.defineProperty(this.isPressed, "down", {
    get: function () {
      return down;
    },
    configurable: true,
    enumerable: true,
  });

  return this;
};
