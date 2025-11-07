// $(".my-atropos").each(function () {
//   Atropos({
//     el: this,
//     activeOffset: 40,
//     shadow: true,
//     highlight: true,
//   });
// });
// $(function () {
//   $(window).on("scroll", function () {
//     const scrollTop = $(this).scrollTop();

//     $(".parallax-layer").each(function () {
//       const speed = $(this).data("speed");
//       const offset = scrollTop * speed;
//       $(this).find("img").css("transform", `translateY(${offset}px)`);
//     });
//   });
// });

// document.querySelectorAll(".my-atropos").forEach((el) => {
//   Atropos({
//     el,
//     activeOffset: 40, // наскільки сильно нахиляється
//     shadow: true, // додає об’ємну тінь
//     highlight: true, // відблиск при русі
//   });
// });

// $(".my-atropos").each(function () {
//   Atropos({
//     el: this, // this → конкретний DOM-елемент
//     activeOffset: 40, // наскільки сильно нахиляється
//     shadow: true, // додає об’ємну тінь
//     highlight: true, // додає світловий відблиск
//   });
// });

// $(function () {
//   // 1️⃣ Ініціалізація Slick Slider
//   $(".slider_cont").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//     arrows: true,
//     dots: false,
//     autoplay: false,
//     speed: 600,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });

//   // 2️⃣ Ініціалізація Atropos для кожної картки після побудови слайдера
//   $(".my-atropos").each(function () {
//     Atropos({
//       el: this,
//       activeOffset: 40, // сила нахилу
//       shadow: true, // додає тінь
//       highlight: true, // додає світловий відблиск
//     });
//   });

//   // 3️⃣ (опціонально) скидання анімацій після зміни слайду
//   $(".slider_cont").on("afterChange", function () {
//     $(".atropos").each(function () {
//       this.atropos && this.atropos.update();
//     });
//   });
// });

// $(function () {
//   // 1️⃣ Ініціалізація Slick
//   const $slider = $(".slider_cont");

//   $slider.on("init", function () {
//     // 2️⃣ Після створення слайдера — запускаємо Atropos
//     $(".my-atropos").each(function () {
//       Atropos({
//         el: this,
//         activeOffset: 40,
//         shadow: true,
//         highlight: true,
//       });
//     });
//   });

//   $slider.slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//     arrows: true,
//     dots: false,
//     autoplay: false,
//     speed: 600,
//     responsive: [
//       { breakpoint: 992, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } },
//     ],
//   });
// });
$(".my-atropos").each(function () {
  Atropos({
    el: this,
    activeOffset: 40,
    shadow: true,
    highlight: true,
  });
});
// ====================HEADER=============
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const secondSection = document.querySelector(".section__3"); // перевір, що такий клас реально є в HTML

  if (!header || !secondSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // якщо 2-га секція у вʼюпорті — сховати хедер
        header.classList.add("header--hidden");
      } else {
        // якщо користувач прокручує назад — показати
        header.classList.remove("header--hidden");
      }
    },
    {
      threshold: 0, // реакція одразу, як 2-га секція потрапляє у вʼюпорт
    }
  );

  observer.observe(secondSection);
});
// ================valid & error ============
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // блокуємо стандартне відправлення

  const nameInput = form.elements.name;
  const emailInput = form.elements.email;

  let isValid = true;

  // Перевірка імені
  if (nameInput.value.trim().length < 2) {
    showError(nameInput, "Please enter your name");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Перевірка email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // Якщо все валідно
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
