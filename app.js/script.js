// USE STRICT MODE

"use strict";

// GRABBING DOM ELEMENTS

console.log("hello");

const header = document.querySelector(".header");
const burgerBox = document.querySelector(".burger-box");
const nav = document.querySelector(".nav");
const lines = document.querySelectorAll(".lines");
const topLine = document.querySelector(".top");
const middle = document.querySelector(".middle");
const bottomLine = document.querySelector(".bottom");

burgerBox.addEventListener("click", () => {
  nav.classList.toggle("navShow");
  topLine.classList.toggle("topChange");
  middle.classList.toggle("middleChange");
  bottomLine.classList.toggle("bottomChange");
});

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

// middle.addEventListener("click", (e) => {
//   console.log(e);
// });
