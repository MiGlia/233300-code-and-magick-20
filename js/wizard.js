// 'use strict';
// (function () {
//   var fireballSize = 22;
//   var wizardSpeed = 3;
//   var wizardWidth = 70;
//   var COIF_WIDTH = 1.377;

// /**
//   * Вычисляет высоту волшебника
//   * @param  {number} width  - ширина волшебника
//   * @return {number} - wizardHeight - высоту волшебника
//   */
//   function getWizardHeight(width) {
//     return wizardHeight = COIF_WIDTH * width;
//   }
//  /**
//   * Определяет скорость полета fireball в зависимомти от ветра
//   * @param  {boolean} IsWindFromLeft - ветер слева
//   * return  {number} - скорость движения firball в зависимости от ветра
//   */
//   function getFireballSpeed(IsWindFromLeft) {
//     return IsWindFromLeft ? 2 : 5;
//   }
//  /**
//   * Высчитывает начальное положение мага при старте игры по оси X
//    * @param  {number} gameFieldWidth - высота игрового пространства
//    * return {number} - начальные координаты волшебника по оси X
//    */
//   function getWizardX (gameFieldWidth) {
//     return gameFieldWidth/2;
//   }
// /**
//   *  Высчитывает начальное положение мага при старте игры по оси Y
//    * @param  {number} gameFieldHeight - высота игрового пространства
//    * return {number} - начальные координаты волшебника по оси Y
//    */
//   function getWizardY (gameFieldHeight) {
//     return gameFieldHeight/3 - wizardHeight;
//   }
// })():