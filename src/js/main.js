
// interyer-nomer__swiper
var swiper = new Swiper(".interyer-nomer__swiper", {
  slidesPerView: 4,
  spaceBetween: 51,
  loop: true,
  speed: 700,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 51,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
  },
});
