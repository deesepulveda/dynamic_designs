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
  if (window.scrollY > 5) {
    lines.forEach((l) => {
      l.classList.add("lineChange");
    });
  } else {
    lines.forEach((l) => {
      l.classList.remove("lineChange");
    });
  }
});

// HEADER CHANGES AFTER SCROLL

const mediaQueryLandscape = window.matchMedia("(min-width: 1024px)");
const mediaQueryPortrait = window.matchMedia("min-width: 300px");

window.addEventListener("scroll", () => {
  if (
    window.scrollY > 1 &&
    !nav.classList.contains("navShow") &&
    mediaQueryLandscape.matches === true
  ) {
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "1px 1px 5px rgba(5,5,5,.3";
    diamondEnds.style.display = "none";
    links.forEach((ln) => {
      ln.style.color = "#050505";
    });
  } else if (window.scrollY > 1 && mediaQueryPortrait) {
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "1px 1px 5px rgba(5,5,5,.3";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
    diamondEnds.style.display = "block";
    links.forEach((ln) => {
      ln.style.color = "#fff";
    });
  }
});

// CAROUSEL SLIDER

const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dots");

// PAGINATIONS

let i = 0;

dots.forEach((d) => {
  d.addEventListener("click", () => {
    console.log(slides[i]);
  });
});

// SECTION DEMO ITEMS APPEAR AFTER SCROLL

const boxItems = document.querySelectorAll(".box-items");
const boxContainer = document.querySelector(".box-items-container");
const sectionHeadWrapper = document.querySelector(".section-headwrapper");
const sectionHead = document.querySelector(".section-head");
const contentBox = document.querySelector(".content-box");
const sectionTitle = document.querySelectorAll(".section-title");

document,
  addEventListener("scroll", () => {
    console.log(sectionHeadWrapper.getBoundingClientRect().top);
    if (
      sectionHeadWrapper.getBoundingClientRect().top < 800 &&
      sectionHead.getBoundingClientRect().top < 800
    ) {
      // sectionTitle.forEach((t) => {
      //   t.classList.add("animateUp");
      // });
      sectionHead.classList.add("animateUp");
      contentBox.classList.add("animateUp");
      contentBox.style.transitionDelay = ".6s";
    } else {
      // sectionTitle.forEach((t) => {
      //   t.classList.remove("animateUp");
      // });
      sectionHead.classList.remove("animateUp");
      contentBox.classList.remove("animateUp");
    }
  });
