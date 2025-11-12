$(document).ready(function () {
  // HEADER

  $(".hero__slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1400,
    dots: true,
    arrows: false,
    fade: true,
    accessibility: true,

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

  $(".slider_cont").slick({
    // NEWS

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    pauseOnHover: true,
    accessibility: true,
    appendDots: $(".section__3 .container"),
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
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
