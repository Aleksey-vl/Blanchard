document.addEventListener('DOMContentLoaded', function () {

  // focus
  document.querySelectorAll('.painter__checklist-btn').forEach(function (step) {
    step.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.painter__focus').forEach(function (tabContent) {
        tabContent.classList.remove('focus-active')
      });
      document.querySelectorAll('.painter__checklist-btn').forEach(function (tabContent) {
        tabContent.classList.remove('painter-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('focus-active')

      step.classList.add('painter-active')

      if (window.matchMedia('(max-width: 812px)').matches) {
        const goto = document.querySelector(`[data-target="${path}"]`);
        const gotoFocus = goto.getBoundingClientRect().top + pageYOffset;
        window.scrollTo({
          top: gotoFocus,
          behavior: 'smooth'
        });
      };
    });
  });

  if (window.matchMedia('(min-width: 812px)').matches) {
    document.querySelectorAll('.gallery__pictures').forEach(function (art) {
      art.addEventListener('click', function (artClick) {
        const open = artClick.currentTarget.dataset.open

        document.querySelectorAll('.modal__list').forEach(function (artContent) {
          artContent.classList.remove('modal_active')
        });
        document.querySelector(`[data-focus="${open}"]`).classList.add('modal_active')
        document.querySelector('body').classList.add('block')
      });
    });
  };

  document.querySelectorAll('.flag').forEach(function (step) {
    step.addEventListener('click', function (event) {
      const flag = event.currentTarget.dataset.flag

      document.querySelectorAll('.painter__checklist-item').forEach(function (tabContent) {
        tabContent.classList.remove('artist-active')
      });

      document.querySelectorAll('.painter__focus').forEach(function (tabContent) {
        tabContent.classList.remove('focus-active')
      });

      document.querySelector(`[data-art="${flag}"]`).classList.add('focus-active');
      document.querySelectorAll(`[data-artist="${flag}"]`).forEach(el => { el.classList.add('artist-active') });
    });
  });

  document.querySelectorAll('.dropdown').forEach(el => {
    new SimpleBar(el, {
      scrollbarMaxSize: 28,
    });
  });

  //buttons

  const list = document.querySelectorAll('.row__btn');
  const drop = document.querySelectorAll('.dropdown')
  const searchBtn = document.querySelector('.search-visible')
  const modalClouse = document.querySelectorAll('.modal__btn-img');
  const modalOverlay = document.querySelectorAll('.modal__item');
  const selectTitle = document.querySelector('.selection-title')
  const burgerMenu = document.querySelector('.burger');
  const select = document.querySelectorAll('.selection-cb__item');
  const selectInput = document.querySelectorAll('.selection-cb__item-in');
  const flagActive = document.querySelectorAll('.flag')

  list.forEach(el => {
    el.addEventListener('click', (e) => {
      list.forEach(el => { el.classList.remove(('button-active')) });
      e.currentTarget.classList.add('button-active');
      drop.forEach(el => { el.classList.remove(('dropdown-active')) })
      e.currentTarget.closest('li').querySelector('.dropdown').classList.toggle('dropdown-active');
    });
  });

  document.addEventListener('click', (e) => {
    // console.log(e.target)
    if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('row__btn')) {
      list.forEach(el => { el.classList.remove(('button-active')) });
      drop.forEach(el => { el.classList.remove(('dropdown-active')) })
    };
  });

  if (window.matchMedia('(max-width: 812px)').matches) {
    searchBtn.addEventListener('click', function () {
      document.querySelector('.header__search').classList.add('visible');
      document.querySelector('.search-visible').classList.add('invisible');
      document.querySelector('.header__logo').classList.add('invisible');
      document.querySelector('.burger').classList.add('invisible');
    });
  };

  if (window.matchMedia('(min-width: 812px)').matches) {
    searchBtn.addEventListener('click', function () {
      document.querySelector('.header__search').classList.add('visible');
      document.querySelector('.search-visible').classList.add('invisible');
    });
  };

  burgerMenu.addEventListener('click', function () {
    document.querySelector('.burger').classList.toggle('burger-active');
    document.querySelector('.nav').classList.toggle('visible');
    document.querySelector('.account-btn').classList.toggle('visible');
  });

  modalClouse.forEach(function (openModal) {
    openModal.addEventListener('click', (del) => {
      modalOverlay.forEach(el => { el.classList.remove(('modal_active')) });
      document.querySelector('body').classList.remove('block');
    });
  });

  selectTitle.addEventListener('click', function () {
    select.forEach(el =>
      el.classList.toggle('selection-cb__visual')
    );
    selectTitle.classList.toggle('selection-title_active');
  });

  // selectInput.forEach(el => {
  //   el.addEventListener('click', (e) => {
  //     e.currentTarget.closest('label').classList.toggle('selection-cb__select');
  //   });
  // });

  flagActive.forEach(el => {
    el.addEventListener('click', (e) => {
      flagActive.forEach(el => { el.classList.remove(('flag_active')) });
      e.currentTarget.classList.add(('flag_active'))
    });
  });


  // scroll

  const menuLinks = document.querySelectorAll('a[data-link]');
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', (clickLink));
  });

  function clickLink(e) {
    const menuLink = e.target;
    const gotoLink = document.querySelector(menuLink.dataset.link);
    const gotoLinks = gotoLink.getBoundingClientRect().top + pageYOffset;
    e.preventDefault();
    window.scrollTo({
      top: gotoLinks,
      behavior: 'smooth'
    });
  };

  // swiper
  const swiper = document.querySelector('.banner-swiper')
  const swiperGallery = document.querySelector('.swiper-gallery')
  const swiperPublication = document.querySelector('.publications-swiper')
  const swiperProjects = document.querySelector('.projects-swiper')
  const swiperEvents = document.querySelector('.events-swiper')

  let banner = new Swiper(swiper, {
    slidesPerView: 'auto',
    // autoplay: {
    //   delay: 3000,
    // },
    loop: true,
  });

  let gallery = new Swiper(swiperGallery, {
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        // slidesPerColumn: 1,
        spaceBetween: 12,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      568: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        slidesPerGroup: 2,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      1370: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
        allowTouchMove: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
  });

  if (window.matchMedia('(min-width: 736px)').matches) {
    let publication = new Swiper(swiperPublication, {
      breakpoints: {
        736: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },

        1024: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 50,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },

        1370: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 70,
          allowTouchMove: false,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },

        1920: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 50,
          allowTouchMove: false,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      },
    });
  };

  let projects = new Swiper(swiperProjects, {
    breakpoints: {
      320: {
        slidesPerView: 'auto',
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 50,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      1370: {
        slidesPerView: 2,
        spaceBetween: 50,
        loop: true,
        allowTouchMove: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        allowTouchMove: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
  });

  if (window.matchMedia('(max-width: 425px)').matches) {
    let events = new Swiper(swiperEvents, {
      slidesPerView: 'auto',
      spaceBetween: 12,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  };

  // select
  const element = document.querySelector('.filter');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    position: 'bottom',
  });


  // accordion
  $(function () {
    $("#accordion").accordion({
      heightStyle: "content"
    });
  });


  //map
  // ?????????????? ymaps.ready() ?????????? ??????????????, ??????????
  // ???????????????????? ?????? ???????????????????? API, ?? ?????????? ?????????? ?????????? ???????????? DOM-????????????.
  ymaps.ready(init);
  function init() {
    // ???????????????? ??????????.
    var myMap = new ymaps.Map("map", {
      // ???????????????????? ???????????? ??????????.
      // ?????????????? ???? ??????????????????: ??????????????, ????????????????.
      // ?????????? ???? ???????????????????? ???????????????????? ???????????? ?????????? ??????????????,
      // ???????????????????????????? ???????????????????????? ?????????????????????? ??????????????????.
      center: [55.75846806898367, 37.60108849999989],
      // ?????????????? ??????????????????????????????. ???????????????????? ????????????????:
      // ???? 0 (???????? ??????) ???? 19.
      zoom: 12
    });
    // ???????????????? ???????????????????? ?? ?????????? ?????????? (??????????).
    // var myGeoObject = new ymaps.GeoObject({
    //   geometry: {
    //       type: "Point", // ?????? ?????????????????? - ??????????
    //       coordinates: [55.75846806898367,37.60108849999989] // ???????????????????? ??????????
    //   }
    // });

    var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/mapPoint.svg',
      iconImageSize: [20, 20],
      // iconImageOffset: [-3, -42]
    });
    // ???????????????????? ???????????????????? ???? ??????????.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);

    // myMap.controls.remove('zoomControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('geolocation');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('mapTools');
  };

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  // validate
  new JustValidate('.feedback-block', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 15,
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          // console.log(phone)
          return Number(phone) && phone.length === 10
        }
      },
    },

    messages: {
      name: {
        required: '?????? ?????? ???????????',
        minLength: '?????????????????????? ???????????????????? 2 ??????????',
        maxLength: '?????????????????????? ???????????????????? 15 ????????????',
      },

      tel: '?????????????? ?????? ??????????????',
    },

    colorWrong: '#FF5C00',

    submitHandler: function (form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('????????????????????');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      form.reset();
    },

  });

  //tulltip
  tippy('.tulltip1', {
    content: '???????????? ?????????????????????? ?????????????????? - ?????????????????????? ?????????????????????? ????????????????????',
    theme: 'light',
    maxWidth: 264,
  });

  tippy('.tulltip2', {
    content: '??????????????, ????????????????, ??????????????????, ?????? ?????????????????? ???? ???????? ?????????????????? ???????????? ???????????????? ?? ?????? ????????????',
    theme: 'light',
    maxWidth: 242,
  });

  tippy('.tulltip3', {
    content: '?? ???????????????????? ???????????????? ????????????????',
    theme: 'light',
    maxWidth: 264,
  });

})

