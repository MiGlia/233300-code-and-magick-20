'use strict';
(function () {
  var CLOUD_WIDTH = 420; //px
  var CLOUD_HEIGHT = 270; //px
  var INITIAL_CLOUD_X = 100; //px
  var INITIAL_CLOUD_Y = 10; //px
  var GAP = 10; //px
  var MAIN_COLOR = 'rgba(0, 0, 0, 0.7)';
  var LINEHEIGHT = 20; //px
  var hist = {
    width: 40, //px
    height: 150, //px
    indent: 50 //px
  };
  var firstCoordX = INITIAL_CLOUD_X + hist.indent; // начальная координата столбцов гистограммы по оси Х
  var firstCoordY = INITIAL_CLOUD_Y + CLOUD_HEIGHT - GAP; // начальная координата столбцов гистограммы по оси Y
  var indentX = hist.width + hist.indent; // шаг
  var FIRST_TEXT = 'Ура вы победили!';
  var SECOND_TEXT = 'Список результатов:';

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
   * находит максимальный элемент в массиве
    * @param  {Array} arr - массив
    * @return {Number} - макс число в массиве
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
/**
 * Отрисовывает столбцы гистограммы
 * @param  {?} ctx
 * @param  {Array} players - массив игроков (из файла game.js)
 * @param  {Array} times - массив времен (из файла game.js)
 */
  function renderStatisticsColomns(ctx, players, times) {

    var maxTime = getMaxElementArr(times);
    var step = hist.height / maxTime;

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1.0)' : 'hsl(200, 61%, 50%,  ' + window.util.getRandomValue(0.1, 1) + ')';
      ctx.fillRect(firstCoordX  +  indentX * i, firstCoordY  - LINEHEIGHT, hist.width, -step * times[i]);
    }
  }
  /**
   * Отрисовка текста на результате
   * @param  {?} ctx
   */
  function renderStatisticsText(ctx) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillText(FIRST_TEXT, 120, 40);
    ctx.fillText(SECOND_TEXT, 120, 60);
  }
  /**
   * Отрисовка текста - времени и имен игроков
   * @param  {?} ctx
   * @param  {Array} players - массив игроков (из файла game.js)
   * @param  {Array} times - массив времен (из файла game.js)
   */
  function renderStatisticsTimePlayers(ctx, players, times) {

    var maxTime = getMaxElementArr(times);
    var step = hist.height / maxTime;

    for (var i = 0; i < players.length; i++) {
     ctx.fillText(players[i], firstCoordX  +  indentX  * i, firstCoordY);
     ctx.fillText(Math.floor(times[i]), firstCoordX  +  indentX * i, 270 - (step * times[i]) - GAP -LINEHEIGHT);
    }
  }

  /**
   * Отрисовка гистграммы, облака, текста, результатов
   * @param  {?} ctx
   * @param  {Array} players - массив игроков (из файла game.js)
   * @param  {Array} times - массив времен (из файла game.js)
   */
  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, INITIAL_CLOUD_X + GAP, INITIAL_CLOUD_Y + GAP, MAIN_COLOR);
    renderCloud(ctx, INITIAL_CLOUD_X, INITIAL_CLOUD_Y, '#fff');
    renderStatisticsColomns(ctx, players, window.util.getSortArray(times));
    renderStatisticsText(ctx);
    renderStatisticsTimePlayers(ctx, players, window.util.getSortArray(times));
  };
})();


