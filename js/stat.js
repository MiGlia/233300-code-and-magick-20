'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;

  /**
   * @param  {} ctx
   * @param  {Number} x
   * @param  {Number} y
   * @param  {} color
   */
  function renderCloud(ctx, x, y ,color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function(ctx, players, times) {

  };
})();
