'use strict';

// vars
const gridImgs = document.querySelectorAll<HTMLImageElement>('.grid__img');
const lightbox = document.querySelector<HTMLDivElement>('.lightbox')!;
const lightboxImg = lightbox.querySelector<HTMLImageElement>('.lightbox__img')!;
const lightboxBtn = lightbox.querySelector<HTMLButtonElement>('.lightbox__btn')!;

// functions
const lightboxBtnHandler = (): void => lightbox.classList.remove('isActive');
const gridImgHandler = (img): void => {
    lightbox.classList.add('isActive');
    lightboxImg.src = img.src;
};

// events
gridImgs.forEach((img: HTMLImageElement) => {
    img.addEventListener('click',  () => {
        gridImgHandler(img);
    });
});

lightboxBtn.addEventListener('click', lightboxBtnHandler);