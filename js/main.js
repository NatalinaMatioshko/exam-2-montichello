"use strict";
// LOADER

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => preloader.remove(), 600);
  }
});

$(".btn_b").on("click", () => {
  alert("SORRY! MAYBE NEXT TIME");
});

// ====================HEADER=============

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const thirdSection = document.querySelector(".section__3");

  if (!header || !thirdSection) return;

  header.classList.add("header--fixed");

  let lastScrollY = window.scrollY;
  let isHidden = false;

  const observer = new IntersectionObserver(
    ([entry]) => {
      const scrollingDown = window.scrollY > lastScrollY;
      lastScrollY = window.scrollY;

      if (entry.isIntersecting && scrollingDown) {
        header.classList.add("header--hidden");
        isHidden = true;
      } else if (!entry.isIntersecting && !scrollingDown && isHidden) {
        header.classList.remove("header--hidden");
        isHidden = false;
      }
    },
    {
      root: null,
      threshold: 0.2,
    }
  );

  observer.observe(thirdSection);
});

// =====scroll============

$(document).ready(function () {
  $(".scroll_down").on("click", function (e) {
    e.preventDefault();
    const target = $("#projects");
    if (target.length) {
      $("html, body").animate({ scrollTop: target.offset().top }, 800);
    }
  });
});

// ================ SUBMIT ============

const form = document.querySelector("#contacts-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.userName.value.trim();
    const email = form.userEmail.value.trim();

    if (!name) {
      alert("Enter name!");
      form.userName.focus();
      return;
    }
    if (!email) {
      alert("Enter email!");
      form.userEmail.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Enter correct email!");
      form.userEmail.focus();
      return;
    }

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav_menu");

  burger?.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");

    const isExpanded = burger.classList.contains("active");
    burger.setAttribute("aria-expanded", isExpanded);
  });
});
