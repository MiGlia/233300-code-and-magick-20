'use strict';
(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', ' Топольницкая', 'Нионго', ' Ирвинг'];

  function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  var wiz = [];
  /**
   * @param  {Array} arr - массив
   * @return {?}
   */
  function getRandomItemArray(arr) {
    return (arr[Math.floor(getRandomValue(0, arr.length - 1))]);
  }

  /**
   * FGDF
   * @param  {Q} count D
   * @param  {Q} arr D
   * @param  {Q} arr1 D
   * @param  {Q} arr2
   * @param  {Q} arr3
   * @return {Y}
   */
  function createNewArrObject(count, arr, arr1, arr2, arr3) {
    for (var i = 0; i < count; i++) {
      arr.push(
          {
            name: getRandomItemArray(arr1),
            coatColor: getRandomItemArray(arr2),
            eyesColor: getRandomItemArray(arr3)
          }
      );
    }
    return arr;
  }

  createNewArrObject(5, wiz, WIZARD_NAMES, WIZARD_EYES_COLORS, WIZARD_COAT_COLORS);

})();
