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

var catBefore = document.querySelector('.results__photo-item--before');
var buttonBefore = document.querySelector('.results__range-button--before');
var buttonAfter = document.querySelector('.results__range-button--after');
var toggle = document.querySelector('.results__range-scale');

commonRange.addEventListener ('click', function() {
  if (catAfter.classList.contains('results__photo-item--closed')) {
    catAfter.classList.remove('results__photo-item--closed');
    catBefore.classList.add('results__photo-item--closed');
  } else {
    catBefore.classList.remove('results__photo-item--closed');
    catAfter.classList.add('results__photo-item--closed');
  }
});
