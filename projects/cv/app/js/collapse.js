'use strict';

$('.collapse').click(function (event) {
  event.preventDefault;
  $(this).children('.collapse-title').toggleClass('open closed');
  $(this).children('.collapse-content').slideToggle('slow');
});