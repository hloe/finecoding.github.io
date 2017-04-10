$(function () {
  'use strict';
  $('.user-card').mouseenter(function () {
    $(this).children('.hover').fadeIn(300);
    $(this).children('figure').children('figcaption').children('h3').children('a').css('color', '#0eb493');
  });
  $('.user-card').mouseleave(function () {
    $(this).children('.hover').fadeOut(300);
    $(this).children('figure').children('figcaption').children('h3').children('a').css('color', '#062033');
  });

})(jQuery);