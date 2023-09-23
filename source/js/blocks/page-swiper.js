import Swiper from '../vendor/swiper';

const setHeroSwiper = () => {
  if (document.body.contains(document.querySelector('.hero__swiper-wrapper'))) {
    new Swiper('.hero__swiper-wrapper', {
      loop: true,

      pagination: {
        el: '.hero__swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1200: {
          allowTouchMove: false,
        },
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }
};

const setProgramsSwiper = () => {
  if (document.body.contains(document.querySelector('.programms__swiper-wrapper'))) {

    new Swiper('.programms__swiper-wrapper', {
      loop: false,

      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 2.1271,
          spaceBetween: 30,
          dragSize: 324,
        },
        1200: {
          allowTouchMove: false,
          slidesPerView: 3,
          spaceBetween: 32,
          dragSize: 392,
        },
      },

      navigation: {
        nextEl: '.programms__swiper-button--next',
        prevEl: '.programms__swiper-button--prev',
      },

      scrollbar: {
        el: '.programms__swiper-scrollbar',
      },
    });
  }
};

const setReviewsSwiper = () => {
  if (document.body.contains(document.querySelector('.reviews__swiper-wrapper'))) {
    new Swiper('.reviews__swiper-wrapper', {
      loop: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 1.276271,
          spaceBetween: 30,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },

      navigation: {
        nextEl: '.reviews__swiper-button--next',
        prevEl: '.reviews__swiper-button--prev',
      },

      scrollbar: {
        el: '.reviews__swiper-scrollbar',
      },
    });
  }

};

const setNewsSwiper = () => {
  if (document.body.contains(document.querySelector('.news__swiper-wrapper'))) {
    new Swiper('.news__swiper-wrapper', {
      loop: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          allowTouchMove: true,
          grid: {
            rows: 2,
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          allowTouchMove: true,
          grid: {
            rows: 2,
          },
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },

      navigation: {
        nextEl: '.news__swiper-button--next',
        prevEl: '.news__swiper-button--prev',
      },

      pagination: {
        el: '.news__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ' news__swiper-bullet">' + (index + 1) + '</span>';
        },
      },
    });
  }
};

export {setHeroSwiper, setProgramsSwiper, setReviewsSwiper, setNewsSwiper};
