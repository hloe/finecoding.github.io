'use strict';
let button = document.getElementsByClassName('purple-button')[1];

button.addEventListener('click', go);

function go(event) {
  event.preventDefault;
  button.innerHTML = (button.innerHTML === 'view more') ? 'view less' : 'view more';
}