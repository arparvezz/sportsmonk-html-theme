console.log("hello from sportsmonk!")

const swiper = new Swiper('#swiper-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
    },
  
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

// cart menu
let cartMenu = document.querySelector('.cart-menu');
let cartMenuBtn = document.querySelector('.cart-menu-btn');
let cartMenuCrossBtn = document.querySelector('.cart-menu-cross-btn');


// show cart menu when cart-menu btn clicked
cartMenuBtn.addEventListener('click',function(event){
  cartMenu.classList.add('cart-menu-active');
})

// hide cart menu when cart-menu-close btn clicked
cartMenuCrossBtn.addEventListener('click',function(event){
  cartMenu.classList.remove('cart-menu-active');
})



// cart drawer
let cartDrawer = document.querySelector('.cart-drawer-section');
let cartDrawerBtn = document.querySelector('.cart-btn');
let cartDrawerCloseBtn = document.querySelector('.cart-drawer-cross-btn');

// show cart drawer when cart btn clicked
cartDrawerBtn.addEventListener('click',function(event){
  cartDrawer.classList.add('cart-drawer-active');
})

// hide cart drawer when close btn clicked
cartDrawerCloseBtn.addEventListener('click',function(event){
  cartDrawer.classList.remove('cart-drawer-active');
})


// product featured image change on click
let productFeaturedImg = document.querySelector('.product-featured-img')
let productThumbnailImgs = document.querySelectorAll('.product-other-img');

productThumbnailImgs.forEach(singleThumbnail => {
  singleThumbnail.addEventListener('click',function(event){
    productFeaturedImg.src = singleThumbnail.src;
  })
})