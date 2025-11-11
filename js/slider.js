$(".btn").on("click", () => {
  alert("SORRY! MAYBE NEXT TIME");
});

$(document).ready(function () {
  $(".hero__slider").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1400,
    dots: true,
    arrows: false,
    fade: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });
});

// ===============NEWS SLIDER============

$(document).ready(function () {
  $(".slider_cont").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendDots: $(".section__3 .container"),
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  });
});
