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

var scaleWidth = scale.offsetWidth;
var toggleWidth = toggle.offsetWidth;

var scaleX = scale.getBoundingClientRect().x;
var scaleRightEdge = scaleWidth - toggleWidth;




var toggleLeft = function () {
  scale.style.justifyContent = "flex-start";
  toggle.style.left = "";
};

var toggleRight = function () {
  scale.style.justifyContent = "flex-end";
  toggle.style.left = "";
};

var toggleToMiddle = function () {
  scale.style.justifyContent = "center";
  toggle.style.left = "";
};

var showBefore = function () {
  coverImage.style.width = "100%";
  coverImage.style.transition = "width 0.5s";
  toggleLeft();
};

var showAfter = function () {
  coverImage.style.width = "0";
  coverImage.style.transitionDuration = "0.5s";
  toggleRight();
};

beforeBtn.addEventListener("click", showBefore);
afterBtn.addEventListener("click", showAfter);
toggle.addEventListener("dblclick", toggleToMiddle);







// commonRange.addEventListener ('click', function() {
//   if (catAfter.classList.contains('results__photo-item--closed')) {
//     catAfter.classList.remove('results__photo-item--closed');
//     catBefore.classList.add('results__photo-item--closed');
//   } else {
//     catBefore.classList.remove('results__photo-item--closed');
//     catAfter.classList.add('results__photo-item--closed');
//   }
// });














//Слайдер
var beforeBtn = document.querySelector(".example__status--before");
var coverImage = document.querySelector(".example__image--box1");
var afterBtn = document.querySelector(".example__status--after");
var scale = document.querySelector(".example__scale");
var toggle = document.querySelector(".example__toggle");

var scaleWidth = scale.offsetWidth;
var toggleWidth = toggle.offsetWidth;

var scaleX = scale.getBoundingClientRect().x;
var scaleRightEdge = scaleWidth - toggleWidth;

//Клики на "Было"/"Стало"
var toggleLeft = function () {
  scale.style.justifyContent = "flex-start";
  toggle.style.left = "";
};

var toggleRight = function () {
  scale.style.justifyContent = "flex-end";
  toggle.style.left = "";
};

var toggleToMiddle = function () {
  scale.style.justifyContent = "center";
  toggle.style.left = "";
};

var showBefore = function () {
  coverImage.style.width = "100%";
  coverImage.style.transition = "width 0.5s";
  toggleLeft();
};

var showAfter = function () {
  coverImage.style.width = "0";
  coverImage.style.transitionDuration = "0.5s";
  toggleRight();
};

beforeBtn.addEventListener("click", showBefore);
afterBtn.addEventListener("click", showAfter);
toggle.addEventListener("dblclick", toggleToMiddle);






//Перемещение toggle мышью
toggle.ondragstart = function() {
  return false;
};

toggle.addEventListener("mousedown", function (evt) {
  evt.preventDefault();

  toggle.style.position = "absolute";

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    //Координаты курсора относительно toggle-bar
    var mouseNewX = moveEvt.clientX - scaleX;

    if (mouseNewX < 0) mouseNewX = 0;
    if (mouseNewX > scaleRightEdge) mouseNewX = scaleRightEdge;
    toggle.style.left = mouseNewX + "px";

    resizeImage(mouseNewX);
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

//Сравнение фото
var resizeImage = function (value) {

  var togglePositionRel = parseInt(value / (scaleWidth - toggleWidth) * 100);
  coverImage.style.width = 100 - togglePositionRel + "%";
}



