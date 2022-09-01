// swiper slider for home page 
var swiper = new Swiper(".articlesSwiper", {
    slidesPerView: 3,
    loop: true,
  
    navigation: {
      nextEl: ".recent-next",
      prevEl: ".recent-prev",
    },
  
    breakpoints: {
      200: {
        slidesPerView: 1.2,
        spaceBetween: 30,
      },
      450: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        freemode: true,
      },
      600: {
        slidesPerView: 2.2,
        spaceBetween: 30,
        freemode: true,
      },
      700: {
        slidesPerView: 2.5,
        spaceBetween: 30,
        freemode: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });