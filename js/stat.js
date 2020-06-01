'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var INITIAL_CLOUD_X = 100;
  var INITIAL_CLOUD_Y = 10;
  var GAP_CLOUD_SHADOW = 10;
  var MAIN_COLOR = 'rgba(0, 0, 0, 0.7)';
  var LINEHEIGHT = 20;

  /**
 * @param  {vv} ctx
 * @param  {Number} x
 * @param  {Number} y
 * @param  {} color
 */
  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, INITIAL_CLOUD_X, INITIAL_CLOUD_Y, MAIN_COLOR);
  };
})();
