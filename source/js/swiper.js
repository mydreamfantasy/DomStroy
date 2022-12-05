
const getSwiper = () => {
  const swiperFirst = new Swiper(".swiper-first", {
    slidesPerView: 1.25,
    spaceBetween: 30,
    allowTouchMove: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiperSecond = new Swiper(".swiper-second", {
    loop: true,
    navigation: {
      nextEl: ".features__pagination-next",
      prevEl: ".features__pagination-prev",
  },
  });

  const thirdrSecond = new Swiper(".swiper-third", {
    loop: true,
    navigation: {
      nextEl: ".review__pagination-next",
      prevEl: ".review__pagination-prev",
  },
  });
}

export { getSwiper }
