(function () {
  'use strict';

  initialRequest();


  // Initiate form submitting
  var form = document.getElementsByClassName('form')[0];
  form.addEventListener('submit', requestPixabay);

  function initialRequest() {

    // Get request from input and encode it
    var request = document.getElementsByClassName('input')[0].value;

    var randomWords = ['travel', 'ocean', 'journey', 'tourist', 'sea', 'beach', 'plane', 'balloon', 'space', 'sky', 'dawn', 'bali', 'holiday', 'desert', 'mountains', 'forest', 'sunset', 'lake', 'river', 'field', 'city', 'london', 'prague', 'krakow', 'australia', 'moon'];

    var randomRequest = Math.floor(Math.random() * randomWords.length);

    // Create url for request
    var requestedUrl = requestedUrl = 'https://pixabay.com/api/?key=5329767-c1e7be6357fccc39d535e11ce&per_page=12&image_type=photo&q=' + randomRequest;

    makeRequest(requestedUrl);

    // Clear input field after sending request
    var form = document.getElementsByClassName('form')[0];
    form.reset();

  }


  function requestPixabay(event) {

    event.preventDefault();

    // Get request from input and encode it
    var request = document.getElementsByClassName('input')[0].value;

    // Create url for request
    var requestedUrl;
    if ((request !== undefined) && (request !== '')) {
      requestedUrl = 'https://pixabay.com/api/?key=5329767-c1e7be6357fccc39d535e11ce&per_page=12&image_type=photo&q=' + encodeURIComponent(request);

      makeRequest(requestedUrl);

      // Clear input field after sending request
      var form = document.getElementsByClassName('form')[0];
      form.reset();
    }

  }

  function makeRequest(url) {
    // Create new object XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Confige object XMLHttpRequest
    xhr.open('GET', url, true);
    xhr.onreadystatechange = receiveResponse;
    xhr.send();


    function receiveResponse(e) {
      if (this.readyState == 4) {
        // xhr.readyState == 4, so we've received the complete server response
        if (this.status == 200) { // xhr.status == 200, so the response is good

          var result = JSON.parse(xhr.responseText);
          showPictures(result);
        } else {
          ups();
        }
      } else {
        ups();
      }
    }
  }

  // Get images links from object
  function takeLinks(data) {}

  // Show images in HTML
  function showPictures(data) {
    // Get pictures links
    var links = _.map(data.hits, 'webformatURL');
    links = _.flatten(links);

    // Get pictures sizes
    var imageWidth = _.map(data.hits, 'imageWidth');
    var imageHeight = _.map(data.hits, 'imageHeight');



    // Using Lodash template is impossible because of Isotope (Masonry and Isotope doesn't see classes from template)
    var container = document.getElementById('images-container');
    container.innerHTML = '';

    var grid = document.getElementsByClassName('grid')[0];
    // var grid = document.createElement('div');
    //    grid.className = 'grid';
    //    container.appendChild(grid);
    var sizer = document.createElement('div');
    sizer.className = 'grid-sizer';
    grid.appendChild(sizer);

    for (var i = 0; i < links.length; i++) {
      var img = document.createElement('img');
      img.setAttribute('src', links[i]);

      // Set class depending on image sizes      
      if (imageWidth[i] >= imageHeight[i]) {
        img.className = 'grid-item grid-item--width2';
      } else if (imageWidth[i] < imageHeight[i]) {
        img.className = 'grid-item grid-item--width2 grid-item--height2';
      } else {
        img.className = 'grid-item';
      }

      grid.appendChild(img);
    }


    isotopeInit();

    function isotopeInit() {

      var iso = new Isotope(grid, {
        // options
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer'
        }
      });

    }

  }

  // Show that images aren't accessible
  function ups() {
    var ups = document.createElement('p');
    ups.innerHTML = 'Sorry, images search is\'n available at the moment';
    var container = document.getElementById('images-container');
    container.innerHTML = '';
    container.appendChild(ups);
  }

})();