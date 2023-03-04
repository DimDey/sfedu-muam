function initializeSlider() {
  let slider = new Swiper('.clients-slider', {
    slidesPerView: 5,
    spaceBetween: 30,
    watchOverflow: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    freeMode: true,
  });
}

initializeSlider()
