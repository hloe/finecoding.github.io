(function () {
  'use strict';

  // Take names from public API
  requestWorks();


  function requestWorks() {

    // Create url for request
    let url = 'https://api.myjson.com/bins/1fddvx';

    // Create new object XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // Confige object XMLHttpRequest
    xhr.open('GET', url, true);
    xhr.onreadystatechange = receiveResponse;
    xhr.send();


    function receiveResponse(e) {
      if (this.readyState == 4) {
        // xhr.readyState == 4, so we've received the complete server response
        if (this.status == 200) { // xhr.status == 200, so the response is good

          var result = JSON.parse(xhr.responseText);
          // Show results in html
          showWorks(result);
        } else {
          ups();
        }
      }
    }
  }

  function showWorks(result) {
    let container = document.getElementById('container');
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < result.works.length; i++) {
      let link = document.createElement('a');
      link.classList = 'card-link works__item';
      link.setAttribute('target', '_blank');
      link.setAttribute('href', result.works[i].link);

      let card = document.createElement('div');
      card.classList = 'card';

      let image = document.createElement('img');

      image.classList = 'card__img';
      image.setAttribute('data-rjs', '2');
      image.setAttribute('src', result.works[i].image);

      let shadow = document.createElement('div');
      shadow.classList = 'card__shadow';

      let title = document.createElement('h3');
      title.classList = 'card__title';
      title.innerHTML = result.works[i].title;

      let text = document.createElement('p');
      text.classList = 'card__text';
      text.innerHTML = result.works[i].description;

      shadow.appendChild(title);
      shadow.appendChild(text);

      link.appendChild(image);
      link.appendChild(shadow);
      fragment.appendChild(link);
    }

    container.appendChild(fragment);
  }

  function ups() {
    let container = document.getElementById('container');
    let p = document.createElement('p');
    p.classList = 'works__text';
    p.innerHTML = 'Sorry, works aren\'t available at the moment.';
    container.appendChild(p);
  }

})();