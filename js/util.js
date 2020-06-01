'use strict';
(function () {

  // /**
  //  * @param  {Array} arr - массив
  //  * @return {Array} arr - отсортированный массив
  //  */
  // function getMaxInArray(arr) {
  //   arr.sort(function (a, b) {
  //     return a - b;
  //   });
  //   return arr;
  // }
  /**
   * Возвращает отрицательное или положительное число для сортировки
   * @param  {Number} a
   * @param  {Number} b
   * @return {Number}
   */
  function getSortValue(a, b) {
    return a - b;
  }

  // function getSortArray(arr) {
  //   var newArr = arr.slice;
  //   return newArr.sort(getSortValue);
  //   // return arr.slice().sort(getSortValue);
  // }


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
   * @return  {Array} - копия массив
   */
  function getSortArray(arr) {
    return getSliceArray(arr).sort(getSortValue);
  }

})();
