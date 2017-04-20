window.onload = function () { // after page loading

  'use strict';

  let scrollUp = document.getElementsByClassName('scrollup'); // to find an element

  scrollUp[0].onmouseover = function () { // add transparency
    scrollUp[0].style.opacity = 1;
    scrollUp[0].style.filter = 'alpha(opacity=100)';
  };

  scrollUp[0].onmouseout = function () { //remove transparency
    scrollUp[0].style.opacity = 0.7;
    scrollUp[0].style.filter = 'alpha(opacity=70)';
  };

  scrollUp[0].onclick = function () { //click processing
    window.scrollTo(0, 0);
  };

  // show button
  window.onscroll = function () { // show and hide block when scrolling
    if (window.pageYOffset > 0) {
      scrollUp[0].style.display = 'block';
    } else {
      scrollUp[0].style.display = 'none';
    }
  };
}