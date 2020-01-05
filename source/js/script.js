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
var photoBefore = document.querySelector('.slider__photo--before');
var toggleAfter = document.querySelector('.slider__toggle--after');
var photoAfter = document.querySelector('.slider__photo--after');
var slider = document.querySelector('.slider__button');
var container = document.querySelector('.slider__container');

toggleAfter.addEventListener('click', function() {
  if (photoAfter.classList.contains('slider__photo--closed')) {
    photoAfter.classList.remove('slider__photo--closed');
    photoBefore.classList.add('slider__photo--closed');
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
  if (photoBefore.classList.contains('slider__photo--closed')
    && slider.classList.contains('slider__button--after')) {
    photoBefore.classList.remove('slider__photo--closed');
    photoAfter.classList.add('slider__photo--closed');
    slider.classList.remove('slider__button--after');
    container.classList.remove('slider__button--after');
    container.classList.add('slider__button--before');

    if (document.documentElement.clientWidth >= 768) {
      slider.classList.add('slider__button--before');
      photoBefore.classList.add('slider__photo-item--active');
    }
  }
});
