!function(){"use strict";function e(e){e.preventDefault();var a,n=document.getElementsByClassName("input")[0].value;if(void 0!==n&&""!==n){a="https://pixabay.com/api/?key=5329767-c1e7be6357fccc39d535e11ce&per_page=12&image_type=photo&q="+encodeURIComponent(n),t(a);document.getElementsByClassName("form")[0].reset()}}function t(e){function t(e){if(4==this.readyState)if(200==this.status){var t=JSON.parse(i.responseText);a(t)}else n();else n()}var i=new XMLHttpRequest;i.open("GET",e,!0),i.onreadystatechange=t,i.send()}function a(e){var t=_.map(e.hits,"webformatURL");t=_.flatten(t);var a=_.map(e.hits,"imageWidth"),n=_.map(e.hits,"imageHeight");document.getElementById("images-container").innerHTML="";var i=document.getElementsByClassName("grid")[0],s=document.createElement("div");s.className="grid-sizer",i.appendChild(s);for(var r=0;r<t.length;r++){var o=document.createElement("img");o.setAttribute("src",t[r]),a[r]>=n[r]?o.classList="grid-item grid-item--width2":a[r]<n[r]?o.classList="grid-item grid-item--width2 grid-item--height2":o.classList="grid-item",i.appendChild(o)}!function(){new Isotope(i,{itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}})}()}function n(){var e=document.createElement("p");e.innerHTML="Sorry, images search is'n available at the moment";var t=document.getElementById("images-container");t.innerHTML="",t.appendChild(e)}!function(){var e=(document.getElementsByClassName("input")[0].value,["travel","ocean","journey","tourist","sea","beach","plane","balloon","space","sky","dawn","bali","holiday","desert","mountains","forest","sunset","lake","river","field","city","london","prague","krakow","australia","moon"]),a=Math.floor(Math.random()*e.length),n=n="https://pixabay.com/api/?key=5329767-c1e7be6357fccc39d535e11ce&per_page=12&image_type=photo&q="+a;t(n),document.getElementsByClassName("form")[0].reset()}(),document.getElementsByClassName("form")[0].addEventListener("submit",e)}();