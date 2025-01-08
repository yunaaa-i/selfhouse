$(function () {
  /* header scroll  */
  // 이전 스크롤 위치를 저장할 변수
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > lastScrollY) {     
      // 스크롤을 내릴 때 헤더를 숨김
      header.style.transform = 'translateY(-100%)';
    } else {
      // 스크롤을 올릴 때 헤더를 나타냄
      header.style.transform = 'translateY(0)';
    }

    // 현재 스크롤 위치를 업데이트
    lastScrollY = window.scrollY;
  });
  /* header scroll end*/

  /* mainvisual slide */
  let mainswiper = new Swiper(".main_visual", {
    loop: true,
    slidesPerView: 1,
    initialSlide: 0,
    centeredSlides: true,
    spaceBetween: 0,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".main_visual .right_btn",
      prevEl: ".main_visual .left_btn",
    },

    pagination: {
      el: ".main_visual .progressbarS",
      type: "progressbar",
    },

    breakpoints: {
      741: {
        slidesPerView: 1.15,
        initialSlide: 0,
      },
    },
  });
  /* mainvisual slide end*/

  /* category slide*/
  var cateswiper = new Swiper(".category .cate_thum", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },

    breakpoints: {
      1000: {
        slidesPerView: 'auto',
        slidesPerGroup: 6,
      },
    },
    // scrollbar: {
    //   el: "cate_thum.swiper-scrollbar",
    // },
    // navigation: {
    //   nextEl: "cate_thum.swiper-button-next",
    //   prevEl: "cate_thum.swiper-button-prev",
    // },
    // catepagination: {
    //   el: "cate_thum.swiper-pagination",
    //   clickable: true,
    // },
  });
  /* category slide end*/


  /* ideasswiper */
  let ideasswiper = new Swiper(".ideas .slide", {
    pagination: {
      el: ".ideas .slide .fractionS",
      type: "fraction",
    },
    navigation: {
      nextEl: ".ideas .slide .right_btn",
      prevEl: ".ideas .slide .left_btn",
    },
  });

  let ideaspagingSwiper = new Swiper(".ideas .slide", {
    pagination: {
      el: ".ideas .slide .progressbarS",
      type: "progressbar",
    },
  });

  ideasswiper.controller.control = ideaspagingSwiper;
  /* ideasswiper end */

  /* sale banner animation*/
  document.addEventListener("DOMContentLoaded", function () {
    const saleBanner = document.querySelectorAll(".bnr_front p, .bnr_back p");
    saleBanner.forEach(banner => {
      const bannerWidth = banner.scrollWidth;
      const speed = bannerWidth / 10;
      banner.style.animationDuration = `${speed}s`;
    });
  });
  /* sale banner animation end*/

  /* new_item slide*/
  let itemswiper = new Swiper(".new_item .item_bnr", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 60,
    freeMode: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".new_item .item_bnr .fractionS",
    //   type: "fraction",
    // },
    // navigation: {
    //   nextEl: ".new_item .item_bnr .right_btn",
    //   prevEl: ".new_item .item_bnr .left_btn",
    // },
    // itempagination: {
    //   el: "item_bnr.swiper-pagination",
    //   clickable: true,
    // },
  });

  /* new_item slide end*/


  /* best_sellerswiper */
  let best_sellerswiper = new Swiper(".best_seller .slide", {
    pagination: {
      el: ".best_seller .slide .fractionS",
      type: "fraction",
    },
    navigation: {
      nextEl: ".best_seller .slide .right_btn",
      prevEl: ".best_seller .slide .left_btn",
    },
  });

  let best_sellerpagingSwiper = new Swiper(".best_seller .slide", {
    pagination: {
      el: ".best_seller .slide .progressbarS",
      type: "progressbar",
    },
  });

  best_sellerswiper.controller.control = best_sellerpagingSwiper;
  /* best_sellerswiper end */


  /* interior style box */
  $('.interior_style ul.txt_box li').click(function () {
    $('.interior_style ul.txt_box li,.interior_style ul.img_box li').removeClass('on');
    $(this).addClass('on');
    let i = $(this).index()
    $('.interior_style ul.img_box li').eq(i).addClass('on');
  });
  /* interior style box end*/


  /* best_review slide*/
  let reviewswiper = new Swiper(".review_bnr", {
    loop: true,
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: false,
    grabCursor: true,

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    keyboard: {
      enabled: true,
    },

    breakpoints: {
      501: {
        direction: 'vertical',
      },
    },

    scrollbar: {
      el: "review_bnr.swiper-scrollbar",
    },

    navigation: {
      nextEl: "review_bnr.swiper-button-next",
      prevEl: "review_bnr.swiper-button-prev",
    },

    reviewpagination: {
      el: "review_bnr.swiper-pagination",
      clickable: true,
    },

  });
  /* best_review slide end*/

  AOS.init();


  function max600() {
    if (window.matchMedia("(max-width: 600px)").matches) {
      itemswiper.autoplay.stop()
      document.querySelector('.ideas video').pause()
      /* the viewport is less than or exactly 500 pixels wide */
    } else {

      /* the viewport is more than 500 pixels wide */
    }

  }
  max600();


  window.addEventListener("resize", function () {
    // window resize시 처리
    max600();
  })

});

