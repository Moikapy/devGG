function gameLoop(scope) {
  const loop = this;

  let fps = scope.constants.targetFps,
    fpsInterval = 1000 / fps,
    before = window.performance.now(),
    cycles = {
      new: {
        frameCount: 0,
        startTime: before,
        sinceStart: 0,
      },
      old: {
        frameCount: 0,
        startTime: before,
        sinceStart: 0,
      },
    },
    resetInterval = 5,
    resetState = "new";

  loop.fps = 0;

  loop.main = function mainLoop(tframe) {
    /**
     * Request Animatopms
     */
    loop.stopLoop = window.requestAnimationFrame(loop.main);

    let now = tframe,
      elapsed = now - before,
      activeCycle,
      targetResetInterval;

    if (elapsed > fpsInterval) {
      before = now - (elapsed % fpsInterval);

      // Increment the vals for both the active and the alternate FPS calculations
      for (var calc in cycles) {
        ++cycles[calc].frameCount;
        cycles[calc].sinceStart = now - cycles[calc].startTime;
      }

      activeCycle = cycles[resetState];

      loop.fps =
        Math.round(
          (1000 / (activeCycle.sinceStart / activeCycle.frameCount)) * 100
        ) / 100;
      // If our frame counts are equal....
      targetResetInterval =
        cycles.new.frameCount === cycles.old.frameCount
          ? resetInterval * fps // Wait our interval
          : resetInterval * 2 * fps; // Wait double our interval

      // If the active calculation goes over our specified interval,
      // reset it to 0 and flag our alternate calculation to be active
      // for the next series of animations.
      if (activeCycle.frameCount > targetResetInterval) {
        cycles[resetState].frameCount = 0;
        cycles[resetState].startTime = now;
        cycles[resetState].sinceStart = 0;

        resetState = resetState === "new" ? "old" : "new";
      }
      /**
       * update game
       */
      scope.state = scope.update(now);
      scope.render();
    }
  };
  loop.main();

  return loop;
}
module.exports = gameLoop;
