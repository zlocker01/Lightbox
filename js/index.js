'use strict';

// vars
var gridImgs = document.querySelectorAll('.grid__img');
var lightbox = document.querySelector('.lightbox');
var lightboxImg = lightbox.querySelector('.lightbox__img');
var lightboxBtn = lightbox.querySelector('.lightbox__btn');

// functions
var lightboxBtnHandler = function lightboxBtnHandler() {
  return lightbox.classList.remove('isActive');
};
var gridImgHandler = function gridImgHandler(img) {
  lightbox.classList.add('isActive');
  lightboxImg.src = img.src;
};

// events
gridImgs.forEach(function (img) {
  img.addEventListener('click', function () {
    gridImgHandler(img);
  });
});
lightboxBtn.addEventListener('click', lightboxBtnHandler);