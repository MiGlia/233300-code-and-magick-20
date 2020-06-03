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


  function renderStatisticsColomns(ctx, players, times) {

    // times = window.util.getSortArr(times);
    var hist = {
      width: 40,
      height: 150,
      indent: 50
    };

    var maxTime = getMaxElementArr(times);
    var step = hist.height / maxTime;

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1.0)' : 'hsl(200, 61%, 50%,  ' + window.util.getRandomValue(0.1, 1) + ')';
      ctx.fillRect(INITIAL_CLOUD_X + hist.indent + (hist.width + hist.indent) * i, INITIAL_CLOUD_Y + CLOUD_HEIGHT - GAP - LINEHEIGHT, hist.width, -step * times[i]);
    }

  }

  function renderStatisticsText(ctx) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  }

  function renderStatisticsTimePlayers(ctx, players, times) {


    var hist = {
      width: 40,
      height: 150,
      indent: 50
    };

    var maxTime = getMaxElementArr(times);
    var step = hist.height / maxTime;
    for (var i = 0; i < players.length; i++) {
     ctx.fillText(players[i], INITIAL_CLOUD_X + hist.indent + (hist.width + hist.indent) * i, INITIAL_CLOUD_Y + CLOUD_HEIGHT - GAP);
     ctx.fillText(Math.floor(times[i]), INITIAL_CLOUD_X + hist.indent + (hist.width + hist.indent) * i, step * times[i]);
    }
  }


  window.renderStatistics = function (ctx, players, times) {

    renderCloud(ctx, INITIAL_CLOUD_X + GAP, INITIAL_CLOUD_Y + GAP, MAIN_COLOR);
    renderCloud(ctx, INITIAL_CLOUD_X, INITIAL_CLOUD_Y, '#fff');
    renderStatisticsColomns(ctx, players, window.util.getSortArray(times));
    renderStatisticsText(ctx);
    renderStatisticsTimePlayers(ctx, players, window.util.getSortArray(times));
  };
})();


