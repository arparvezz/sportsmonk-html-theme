console.log("hello from sportsmonk!")

const swiper = new Swiper('#swiper-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

new Swiper('#swiper-gallary',{
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: '.gallary-pagination',
    type: 'bullets',
    clickable: true
  },

  breakpoints: {
    // when window width is >= 740px
    740: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
})