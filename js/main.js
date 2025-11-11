"use strict";

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

$(document).ready(function () {
  $(".scroll_down").on("click", function (e) {
    e.preventDefault();
    const target = $("#projects");
    if (target.length) {
      $("html, body").animate({ scrollTop: target.offset().top }, 800);
    }
  });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = form.elements.name;
  const emailInput = form.elements.email;

  let isValid = true;

  if (nameInput.value.trim().length < 2) {
    showError(nameInput, "Please enter your name");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  if (isValid) {
    console.log("Form is valid!");
    form.reset();
  }
});

function showError(input, message) {
  let error = input.nextElementSibling;
  if (!error || !error.classList.contains("error-message")) {
    error = document.createElement("div");
    error.classList.add("error-message");
    input.after(error);
  }
  error.textContent = message;
  input.classList.add("invalid");
}

function clearError(input) {
  const error = input.nextElementSibling;
  if (error && error.classList.contains("error-message")) {
    error.remove();
  }
  input.classList.remove("invalid");
}
