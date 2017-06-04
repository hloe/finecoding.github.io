'use strict';
var search = document.getElementsByClassName('search-icon')[0];
search.onerror = function () {
  search.setAttribute('src', 'images/search@2x.png');
}