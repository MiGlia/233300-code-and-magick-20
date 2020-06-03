'use strict';
(function () {

  /**
   * Возвращает отрицательное или положительное число для сортировки
   * @param  {Number} a
   * @param  {Number} b
   * @return {Number}
   */
  function getSortValue(a, b) {
    return a - b;
  }

  /**
   * Возвращает скопрированный массив
   * @param  {Array} arr - массив
   * @return  {Array} - копия массив
   */
  function getSliceArray(arr) {
    return arr.slice();
  }

  /**
   * Возвращает скопированный отсортированный по возрастанию массив
   * @param  {Array} arr - массив
   * @return  {Array} - отсортиропанная по возрастанию копия массив
   */
  function getSortArray(arr) {
    return getSliceArray(arr).sort(getSortValue);
  }

    // Функция для рассчета случайного значения
    function getRandomValue(min, max) {
      return Math.random() * (max - min) + min;
    }

  window.util = {
    getRandomValue: getRandomValue,
    getSliceArray: getSliceArray,
    getSortArray: getSortArray
  };
})();

 // function getMaxElementArr(arr) {
  //   maxValue = arr[0];
  //   for (i = 0; i < arr.length; i++) {
  //     if (arr[i] > maxValue[0]) {
  //       maxvalue = arr[i]
  //     }
  //   }
  //   return maxValue;
  // }

