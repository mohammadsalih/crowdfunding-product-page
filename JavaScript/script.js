"use strict";
// variables
// navigation variables
const nav = document.querySelector("nav");
const menuIcons = document.querySelectorAll(".menu-icon");
const backPoject = document.querySelector(".back-project");
const btnBledge = document.querySelectorAll(".btn-bledge");
const success = document.querySelector(".success");
const btnThanks = document.querySelectorAll(".btn-continue");
const radio = document.querySelectorAll(".radio");

// this funtin is to open the back this project overlay
function payBoxActive(event) {
  const allPayBox = document.querySelectorAll(".pay-box");
  const thisPayBox =
    event.currentTarget.parentElement.parentElement.parentElement
      .parentElement.parentElement;

  allPayBox.forEach((element) => {
    element.classList.remove("pay-box-active");
  });
  thisPayBox.classList.add("pay-box-active");
}
radio.forEach((element) => {
  element.addEventListener("click", payBoxActive);
});
// this funtin is to open the back this project overlay
function openBackPoject() {
  backPoject.classList.toggle("overlay-open");
}
btnBledge.forEach((element) => {
  element.addEventListener("click", openBackPoject);
});
// this funtin is to open the thanks letter overlay
function openSuccess() {
  backPoject.classList.remove("overlay-open");

  success.classList.toggle("overlay-open");
}
btnThanks.forEach((element) => {
  element.addEventListener("click", openSuccess);
});
// this funtin is to open the navigation menu
function openNav() {
  nav.classList.toggle("nav-open");
  menuIcons.forEach((element) => {
    element.classList.toggle("menu-icon-active");
  });
}
// bookmark variables
const bookMark = document.querySelector(".bookmark");

// this funtin is to book mark the project
function openBookMark() {
  bookMark.classList.toggle("bookmark-open");
}
