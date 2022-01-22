var header = document.getElementById("header");
var ctBtn = document.getElementById("contactBtn");

/**
 * This function changes the style of the menu when it's opened and lock the scroll of the body
 * @param {*} menu 
 */
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  header.classList.toggle("extended");
  ctBtn.style.display = "none";
  document.body.classList.toggle("lock-scroll");
}

//change logo on scrolling
var initialImg = "./img/logo.png";
var scrollImg = "./img/logo_small.png";
var logo = document.getElementById("img-logo");

window.onscroll = function () {
  scrollFunction();
};

/**
 * Function that changes the logo icon and shows the contact button
 * when the user scrolls the page
 */
function scrollFunction() {
  if (document.documentElement.scrollTop > 80) {
    logo.src = scrollImg;
    ctBtn.style.display = "flex";
  } else {
    logo.src = initialImg;
    ctBtn.style.display = "none";
  }
}
