const swiper = new window.Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 20,

  grabCursor: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 4,
    },
  },
});
