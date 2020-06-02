'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var INITIAL_CLOUD_X = 100;
  var INITIAL_CLOUD_Y = 10;
  var GAP = 10;
  var MAIN_COLOR = 'rgba(0, 0, 0, 0.7)';
  var LINEHEIGHT = 20;

  /**
   * Отрисовка прямоугольного облака для экрана статистики
   * @param  {?} ctx
   * @param  {Number} x
   * @param  {Number} y
   * @param  {?} color
   */
  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

  /**
    * @param  {Array} arr
    * @return {Number}
    */
  function getMaxElementArr(arr) {
    var maxValue = arr[0];
    arr.forEach(function (item) {
      if (item > maxValue) {
        maxValue = item;
      }
    });
    return maxValue;
  }

  // function renderCStatisticsColomns(ctx) {
  //   ctx.fillStyle = MAIN_COLOR;
  //   ctx.fillRect(INITIAL_CLOUD_X + GAP_CLOUD_SHADOW, INITIAL_CLOUD_X + GAP_CLOUD_SHADOW, CLOUD_WIDTH, CLOUD_HEIGHT);
  // }

  window.renderStatistics = function(ctx, players, times) {
    // renderCloud(ctx, INITIAL_CLOUD_X + GAP, INITIAL_CLOUD_Y + GAP, MAIN_COLOR);
    // renderCloud(ctx, INITIAL_CLOUD_X, INITIAL_CLOUD_Y, '#fff');

    var maxTime = getMaxElementArr(times);
    var step = 150 / maxTime;

    for
    var coordX =


  };
})();
