"use strict";

document.querySelector("#moon-click").addEventListener("click", function () {
  document.querySelector("#html").classList.toggle("dark");
  document.querySelector("#moon-click").classList.add("hidden");
  document.querySelector("#sun-click").classList.remove("hidden");
});
document.querySelector("#sun-click").addEventListener("click", function () {
  document.querySelector("#html").classList.toggle("dark");
  document.querySelector("#sun-click").classList.add("hidden");
  document.querySelector("#moon-click").classList.remove("hidden");
});

document.querySelector("#theme").addEventListener("click", function () {
  document.querySelector("#html").classList.toggle("dark");
  document.querySelector("#sun-click").classList.remove("hidden");
  document.querySelector("#moon-click").classList.add("hidden");
});

document.querySelector("#pp").addEventListener("click", function () {
  document.querySelector("#test").classList.toggle("click");

  document.querySelector("#color").classList.toggle("text-orange-300");
});

document.querySelector("#x-mark1").addEventListener("click", function () {
  document.querySelector(".menu1").classList.remove("right-0");
  document.querySelector(".menu1").classList.add("-right-64");
  document.querySelector("#overLay").classList.remove("overlay--open");
  document.querySelector("#overLay").classList.add("overlay--close");
});

document
  .querySelector("#menu-icon-click")
  .addEventListener("click", function () {
    document.querySelector(".menu1").classList.remove("-right-64");
    document.querySelector(".menu1").classList.add("right-0");
    document.querySelector("#overLay").classList.add("overlay--open");
    document.querySelector("#overLay").classList.remove("overlay--close");
  });

document.querySelector("#overLay").addEventListener("click", function () {
  document.querySelector(".menu1").classList.remove("right-0");
  document.querySelector(".menu1").classList.add("-right-64");
  document.querySelector("#overLay").classList.remove("overlay--open");
  document.querySelector("#overLay").classList.add("overlay--close");

  document.querySelector("#mobile-shopping").classList.remove("left-0");
  document.querySelector("#mobile-shopping").classList.add("-left-64");
  document.querySelector("#overLay").classList.remove("overlay--open");
  document.querySelector("#overLay").classList.add("overlay--close");
});

document.querySelector("#x-ma").addEventListener("click", function () {
  document.querySelector("#mobile-shopping").classList.remove("left-0");
  document.querySelector("#mobile-shopping").classList.add("-left-64");
  document.querySelector("#overLay").classList.remove("overlay--open");
  document.querySelector("#overLay").classList.add("overlay--close");
});

document.querySelector("#mobile-cart").addEventListener("click", function () {
  document.querySelector("#mobile-shopping").classList.remove("-left-64");
  document.querySelector("#mobile-shopping").classList.add("left-0");
  document.querySelector("#overLay").classList.add("overlay--open");
  document.querySelector("#overLay").classList.remove("overlay--close");
});
