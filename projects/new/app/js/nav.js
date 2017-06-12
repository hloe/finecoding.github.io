$(window).scroll(function () {
  'use strict';

  var $navigationLinks = $('.nav__link_header'),
    $sections = $(".part"),
    $sectionsReversed = $($(".part").get().reverse()),
    sectionIdToNavLink = {},
    position = $(this).scrollTop();

  $sections.each(function () {
    let selector = `a[href="#${$(this).attr('id')}"]`;
    sectionIdToNavLink[$(this).attr('id')] = $(selector);
  });

  $sectionsReversed.each(function () {
    var currentSection = $(this),
      sectionTop = currentSection.offset().top;

    if (position >= sectionTop) {
      var id = currentSection.attr('id'),
        $navigationLink = sectionIdToNavLink[id];

      if (!$navigationLink.hasClass('nav__link_active')) {
        $navigationLinks.removeClass('nav__link_active');
        $navigationLink.addClass('nav__link_active');
      }
      return false;
    }
  });

});