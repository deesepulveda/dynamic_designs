// USE STRICT MODE

"use strict";

// GRABBING DOM ELEMENTS

const header = document.querySelector(".header");
const burgerBox = document.querySelector(".burger-box");
const nav = document.querySelector(".nav");
const diamondEnds = document.querySelector(".diamond-ends");
const links = document.querySelectorAll(".links");
const lines = document.querySelectorAll(".lines");
const topLine = document.querySelector(".top");
const middle = document.querySelector(".middle");
const bottomLine = document.querySelector(".bottom");

// SHOW NAV ON CLICK

burgerBox.addEventListener("click", () => {
  nav.classList.toggle("navShow");
  topLine.classList.toggle("topChange");
  middle.classList.toggle("middleChange");
  bottomLine.classList.toggle("bottomChange");
});

// CHANGE BURGER LINE COLOR AFTER SCROLL

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
    lines.forEach((l) => {
      l.classList.add("lineChange");
    });
  } else {
    lines.forEach((l) => {
      l.classList.remove("lineChange");
    });
  }
});

// HEADER BG COLOR APPEAR AFTER SCROLL IN LANDSCAPE MODE

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "1px 1px 5px rgba(5,5,5,.3";
    diamondEnds.style.display = "none";
    links.forEach((li) => {
      li.style.color = "#050505";
    });
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
    diamondEnds.style.display = "block";
    links.forEach((li) => {
      li.style.color = "#fff";
    });
  }
});
