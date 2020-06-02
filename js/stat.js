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

  function getMaxElementArr(arr) {
    maxValue = arr[0];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue[0]) {
        maxvalue = arr[i]
      }
    }
    return maxValue;
  }



  var arr1 = [1,10, 4];

function grt(arr) {
    var maxValue = arr[0]
    arr.forEach(function (item) {
      if (item > maxValue) {
        maxValue = item;
      }
    })
    return maxValue;
  }


grt(arr1);

  window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, INITIAL_CLOUD_X + GAP_CLOUD_SHADOW , INITIAL_CLOUD_Y + GAP_CLOUD_SHADOW , MAIN_COLOR)
    renderCloud(ctx, INITIAL_CLOUD_X, INITIAL_CLOUD_Y, '#ffffff');


  };
})();
