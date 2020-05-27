'use strict';
(function () {
  var fireballSize = 22;
  var wizardSpeed = 3;
  var wizardWidth = 70;
  var COIF_WIDTH = 1.377;


  function getWizardHeight(width) {
    return wizardHeight = COIF_WIDTH * width;
  }

  function getFireballSpeed(IsWindFromLeft) {
    return IsWindFromLeft ? 2 : 5;
  }

  function getWizardX (gameFieldWidth) {
    return gameFieldWidth/2;
  }

  function getWizardY (gameFieldHeight) {
    return gameFieldHeight/3 - wizardHeight;
  }
})();