/**
 * PX to EM Calculator created while reading
 * http://blog.typekit.com/2011/11/09/type-study-sizing-the-legible-letter
 * Inspired by http://pxtoem.com/
 */

 var PXTOEM = (function() {

  'use strict';

  var config = {
    context: 16
  },
  resultPlace = document.getElementById("result"),
  em          = document.getElementById("em"),
  px          = document.getElementById("px"),
  button      = document.getElementById("submit"),
  pxtoem, emtopx, clear, printValue;

  pxtoem = function(value) {
    return value / config.context;
  };

  emtopx = function(value) {
    return value * config.context;
  };

  clear = function(input) {
    return input.value = '';
  };

  em.addEventListener('focus', function() {
    clear(px);
  });

  px.addEventListener('focus', function() {
    clear(em);
  });

  printValue = function(value) {
    return resultPlace.innerHTML = value;
  }

  button.addEventListener('click', function(event) {

    event.preventDefault();

    if (px.value) {
      var value = px.value.replace(/[^0-9.]/g, '');
      printValue(pxtoem(value));
    } else if (em.value) {
      var value = em.value.replace(/[^0-9.]/g, '');
      printValue(emtopx(value));
    } else {
      printValue('Please type a value');
    }

  });

})();
