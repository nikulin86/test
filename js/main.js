/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
// import "./import/modules";
// import "./import/components";

/*eslint linebreak-style: ["error", "windows"]*/

  var burgerBtn = document.querySelector(".burger-menu");
  var burgerNav = document.querySelector(".burger-nav");
  var icon = document.querySelector(".header-icon");
  var headerButton = document.querySelector(".header-btn");
  var modalWindow = document.querySelector(".modal-window");
  var modalClose = document.querySelector(".btn-close");
  var burgerNavButton = document.querySelector(".burger-nav__button");
  burgerBtn.addEventListener("click", function () {
    burgerNav.classList.toggle("active"); // проверяем есть ли класс активности для того чтобы убрать скролл

    if (burgerNav.classList.contains("active")) {
      hideScroll();
    } else {
      showScroll();
    }
  });
  icon.addEventListener("click", function () {
    window.scrollTo(pageYOffset, 0);
  }); // modal

  headerButton.addEventListener("click", function () {
    document.body.style.paddingRight = "".concat(getScrollbarWidth(), "px");
    document.body.style.overflow = "hidden";
    modalWindow.classList.add("modal-window__active"); // проверяем есть ли класс активности для того чтобы убрать скролл
    // if (modalWindow.classList.contains("modal-window__active")) {
    //     hideScroll();
    // } else {
    //     showScroll();
    // }
  });
  burgerNavButton.addEventListener("click", function (event) {
    event.preventDefault();
    modalWindow.classList.add("modal-window__active"); // document.body.style.overflow = "hidden";
  });
  modalClose.addEventListener("click", function (event) {
    event.preventDefault();
    modalWindow.classList.remove("modal-window__active");
    document.body.style.paddingRight = "";
    document.body.style.overflow = "visible";
  });
 // убирает бургер если ресайзить страницу


var resetNav = function resetNav() {
  var burgerNav = document.querySelector(".burger-nav");
  burgerNav.classList.remove("active");
  showScroll();
};

window.addEventListener("resize", resetNav); // const header = document.querySelector(".section-header");

var mainNavigation = document.querySelector(".header"); // функции которые прячут скролл и возвращают когда включен бургер

var hideScroll = function hideScroll() {
  var scrollWidth = "".concat(getScrollbarWidth(), "px");
  document.body.style.paddingRight = scrollWidth;
  document.body.style.overflow = "hidden";
  mainNavigation.style.paddingRight = scrollWidth;
};

var showScroll = function showScroll() {
  document.body.style.paddingRight = "";
  document.body.style.overflow = "visible";
  mainNavigation.style.paddingRight = "";
}; // get scrollbar width


var getScrollbarWidth = function getScrollbarWidth() {
  var outer = document.createElement("div");
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  outer.style.width = "50px";
  outer.style.height = "50px";
  outer.style.overflow = "scroll";
  outer.style.visibility = "hidden";
  document.body.appendChild(outer);
  var scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);
  return scrollBarWidth;
};
/******/ })()
;
//# sourceMappingURL=main.js.map