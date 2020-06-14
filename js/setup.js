'use strict';
(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', ' Топольницкая', 'Нионго', ' Ирвинг'];
  var userDialog = document.querySelector('.setup');
  var countObject = 4;

  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  // Создаем пустой массив для будущего заполнения
  var wiz = [];

  /**
   * @param  {Array} arr - массив
   * @return {?} - возвращает случайный элемент массива
   */
  function getRandomItemArray(arr) {
    return (arr[Math.floor(window.util.getRandomValue(0, arr.length - 1))]);
  }

  /**
   * создает массив обьектов с рандомными свойствами
   * @param  {number} count  - количество создаваемых обьектов
   * @param  {Array} arr массив
   * @param  {Array} arrName массив
   * @param  {Array} arrSurName массив
   * @param  {Array} arrCoat массив
   * @param  {Array} arrEyes массив
   * @return {Array} массив сгенерированных обьетов
   */
  function createNewArrObject(count, arr, arrName, arrSurName, arrCoat, arrEyes) {
    for (var i = 0; i < count; i++) {
      arr.push(
          {
            name: getRandomItemArray(arrName) + ' ' + getRandomItemArray(arrSurName),
            coatColor: getRandomItemArray(arrCoat),
            eyesColor: getRandomItemArray(arrEyes)
          }
      );
    }
    return arr;
  }

  createNewArrObject(countObject, wiz, WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_EYES_COLORS, WIZARD_COAT_COLORS);

  // находим место в разметке для вставки похожих персонажей
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  // шаблон
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  // пустой фрагмент для вставки в него шаблона
  var fragment = document.createDocumentFragment();

  /**
   * копирует шаблон и заполняет его данными из массива
   * @param  {Array} arr - массив обьектов с свойствами волшебников
   * @return {?} - обьект массива
   */
  function renderWizard(arr) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = arr.name;
    wizardElement.querySelector('.wizard-coat').style.fill = arr.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
    return wizardElement;
  }

  /**
   * проходится по массиву, добавляет во фрагмент кажлый обьект массива, добавляет в разметку фрагмент
   * @param  {Array} arr - массив
   */
  function drawWizards(arr) {
    for (var i = 0; i < arr.length; i++) {
      fragment.appendChild(renderWizard(arr[i]));
      similarListElement.appendChild(fragment);
    }
  }
  drawWizards(wiz);
})();
