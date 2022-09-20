// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

// header__nav - list, header__nav-mobile - buttons
// HEADER NAVIGATION
document.querySelector('body').addEventListener('click', (ev) => {

  if (ev.target.classList.contains('header__nav-mobile')) {
    ev.target.classList.toggle('active')
    document.querySelector('.header__nav').classList.toggle('active')
  }
  if (ev.target.classList.contains('nav-mobile__item')) {
    ev.target.parentNode.classList.toggle('active')
    document.querySelector('.header__nav').classList.toggle('active')
  }
  if (ev.target.classList.contains('header__nav-link')) {
    document.querySelector('.header__nav').classList.remove('active')
    document.querySelector('.header__nav-mobile').classList.remove('active')
  }

})

//================================================

//SLIDER
//first

const swiper1 = new Swiper('.first__wrapper', {
  // Optional parameters
  init: true,
  loop: false,
  centeredSlides: false,
  initialSlide: 0,
  slidesPerView: "auto",
  spaceBetween: 20,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    767.98: {
      slidesPerView: 3,
    },
    991.98: {
      slidesPerView: 3,
    },
    1070: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: "auto",
      // slidesPerView: 4.5,
    },
  }
});

//second
const swiper2 = new Swiper('.swiper', {
  // Optional parameters
  // init: true,
  // loop: false,
  // centeredSlides: false,
  // initialSlide: 0,
  slidesPerView: "auto",
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.2,
    },
    767.98: {
      slidesPerView: 1,
    },
    991.98: {
      slidesPerView: 1,
    },
    1070: {
      // slidesPerView: 1,
    },
    1440: {
      // slidesPerView: 1.2,
      // spaceBetween: 20
    },

  }
});
//============================================
// SPOLLER

document.querySelector('.five__grid-wrapper').addEventListener('click', function (ev) {
  if (ev.target.classList.contains('spoller-title')) {

    if (ev.target.classList.contains('active')) {
      ev.target.classList.remove('active')
      ev.target.closest('.five__block').querySelector('.spoller-text').classList.remove('active')
    } else {
      document.querySelectorAll('.spoller-text.active').forEach(el => el.classList.remove('active'))
      document.querySelectorAll('.spoller-title.active').forEach(el => el.classList.remove('active'))
      ev.target.classList.add('active')
      ev.target.closest('.five__block').querySelector('.spoller-text').classList.add('active')
    }


  }
})