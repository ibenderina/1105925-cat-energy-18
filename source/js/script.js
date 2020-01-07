var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.header__nav-toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('header__nav-toggle--close');
navToggle.style.opacity = '1';

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navToggle.classList.remove('header__nav-toggle');
    navToggle.classList.add('header__nav-toggle--close');
  } else {
    navToggle.classList.remove('header__nav-toggle--close');
    navToggle.classList.add('header__nav-toggle');
  }
});

var toggleBefore = document.querySelector('.slider__toggle--before');
var photoBefore = document.querySelector('.slider__photo-item--before');
var toggleAfter = document.querySelector('.slider__toggle--after');
var photoAfter = document.querySelector('.slider__photo-item--after');
var sliderButton = document.querySelector('.slider__button');

toggleAfter.addEventListener('change', function() {
  photoAfter.classList.remove('slider__photo-item--closed');
  photoAfter.classList.add('slider__photo-item--active');

  photoBefore.classList.remove('slider__photo-item--active');
  photoBefore.classList.add('slider__photo-item--closed');

  sliderButton.classList.remove('slider__button--before');
  sliderButton.classList.add('slider__button--after');
});

toggleBefore.addEventListener('change', function() {
  photoBefore.classList.remove('slider__photo-item--closed');
  photoBefore.classList.add('slider__photo-item--active');

  photoAfter.classList.remove('slider__photo-item--active');
  photoAfter.classList.add('slider__photo-item--closed');

  sliderButton.classList.remove('slider__button--after');
  sliderButton.classList.add('slider__button--before');
});
