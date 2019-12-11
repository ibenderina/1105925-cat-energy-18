var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-nav__toggle--close');

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
    navToggle.classList.remove('main-nav__toggle');
    navToggle.classList.add('main-nav__toggle--close');
  } else {
    navToggle.classList.remove('main-nav__toggle--close');
    navToggle.classList.add('main-nav__toggle');
  }
});

var toggleBefore = document.querySelector('.slider__toggle--before');
var photoBefore = document.querySelector('.slider__photo--before');
var toggleAfter = document.querySelector('.slider__toggle--after');
var photoAfter = document.querySelector('.slider__photo--after');
var slider = document.querySelector('.slider__button');
var container = document.querySelector('.slider__container');

toggleAfter.addEventListener('click', function() {
  if (photoAfter.classList.contains('results__photo-item--closed')) {
    photoAfter.classList.remove('results__photo-item--closed');
    photoBefore.classList.add('results__photo-item--closed');
    slider.classList.add('slider__button--after');
    container.classList.remove('slider__container--before');
    container.classList.add('slider__container--after');

    if (document.documentElement.clientWidth >= 768) {
      slider.classList.remove('slider__button--before');
      slider.classList.add('slider__button--after');
      photoAfter.classList.add('slider__photo-item--active');
    }
  }
});

toggleBefore.addEventListener('click', function() {
  if (photoBefore.classList.contains('results__photo-item--closed')
    && slider.classList.contains('slider__button--after')) {
    photoBefore.classList.remove('results__photo-item--closed');
    photoAfter.classList.add('results__photo-item--closed');
    slider.classList.remove('slider__button--after');
    container.classList.remove('slider__button--after');
    container.classList.add('slider__button--before');

    if (document.documentElement.clientWidth >= 768) {
      slider.classList.add('slider__button--before');
      photoBefore.classList.add('slider__photo-item--active');
    }
  }
});
