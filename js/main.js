/* Script for checking SMIL-animation (== if browser used is ie) */
if (!Modernizr.smil) {
  document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("xp").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("noie__header").style.display = "block";
}

/* Script for collapsibles */
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

/* Script for making whole li element clickable inside navbar */
const navbar = document.querySelector(".nav");
const mainLink = document.querySelector(".nav__item");

navbar.addEventListener("click", handleClick);

function handleClick(event) {
  mainLink.click();
}

/* Scripts for changing betweem component */
function change__component(component) {
  const components = document.querySelectorAll(".component");
  components.forEach((item) => (item.style.display = "none"));
  document.getElementById(component).style.display = "flex";
}

/* Script for animating footer icons after onclick */
var rotated = false;

document.getElementById("animicon").onclick = function () {
  const animicons = document.querySelectorAll(".animicon");
  let deg = rotated ? -360 : 360;
  animicons.forEach(
    (item) => (item.style.transition = "transform 1.8s ease-in-out 1s")
  );
  animicons.forEach(
    (item) => (item.style.transform = "rotate(" + deg + "deg)")
  );
  rotated = !rotated;
};

/* Scripts for hovering over footer icons */
function mouse__over(id) {
  const animicons = document.querySelectorAll(".animicon");
  animicons.forEach(
    (item) => (item.style.transition = "transform 0.15s linear 0.001s")
  );
  document.getElementById(id).style.transform = "scale(1.4, 1.4)";
}
function mouse__leave(id) {
  const animicons = document.querySelectorAll(".animicon");
  animicons.forEach(
    (item) => (item.style.transition = "transform 0.15s linear 0.001s")
  );
  document.getElementById(id).style.transform = "scale(1, 1)";
}

/* Scripts to show/hide back__up arrow in main and experience page */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("back__up").style.left = "1rem";
    document.getElementById("back__top").style.left = "1rem";
  } else {
    document.getElementById("back__up").style.left = "-16rem";
    document.getElementById("back__top").style.left = "-16rem";
  }
  prevScrollpos = currentScrollPos;
};
