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

// ********************************************************************* //

const sections = document.querySelectorAll(".sections");
const contentBox = document.querySelector(".content-box");
const triangleSolid = document.querySelectorAll(".triangle-solid");
const triangleSolidNews = document.querySelector(".triangle-solid-news");

// SECTIONS OBSERVATION OBSERVER

const observerFunc = function (entries) {
  const [entry] = entries;
  console.log(entry);

  entry.target.classList.toggle("show", entry.isIntersecting);

  if (entry.isIntersecting) sectionsObs.unobserve(entry.target);
};

const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "-50px",
};

const sectionsObs = new IntersectionObserver(observerFunc, observerOptions);

sections.forEach((s) => {
  sectionsObs.observe(s);
});

// TITLES OBSERVATION OBSERVER

const sectionHeadWrapper = document.querySelectorAll(".section-headwrapper");
const sectionHead = document.querySelectorAll(".section-head");
const titles = document.querySelectorAll(".titles");

const titleObsFunc = function (entries) {
  const [entry] = entries;
  console.log(entry);

  entry.target.classList.toggle("showOpacity", entry.isIntersecting);

  if (entry.isIntersecting) titlesObs.unobserve(entry.target);
};

const titlesObs = new IntersectionObserver(titleObsFunc, {
  root: null,
  threshold: 0.1,
  rootMargin: "-120px",
});

titles.forEach((ti) => {
  titlesObs.observe(ti);
});

// ********************************************************************* //
