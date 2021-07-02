document.addEventListener('DOMContentLoaded', function () {

  // focus
  document.querySelectorAll('.painter__checklist-btn').forEach(function (step) {
    step.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.painter__focus').forEach(function (tabContent) {
        tabContent.classList.remove('focus-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('focus-active')

      if (window.matchMedia('(max-width: 768px)').matches){
        const goto = document.querySelector(`[data-target="${path}"]`);
        const gotoFocus = goto.getBoundingClientRect().top + pageYOffset;
        window.scrollTo({
          top:gotoFocus,
          behavior: "smooth"
        });
      };
    });
  });

  document.querySelectorAll('.gallery__pictures').forEach(function (art) {
    art.addEventListener('click', function (artClick) {
      const open = artClick.currentTarget.dataset.open

      document.querySelectorAll('.gallery__focus_list').forEach(function (artContent) {
        artContent.classList.remove('gallery__focus_active')
      });
      document.querySelector(`[data-focus="${open}"]`).classList.add('gallery__focus_active')
      document.querySelector('body').classList.add('block')
    });
  });

  //buttons

  const list = document.querySelectorAll('.banner__item');
  const searchBtn = document.querySelector('.btn_visible')
  const modalClouse = document.querySelector('.gallery__focus_clouse');
  const modalOverlay = document.querySelector('.gallery__focus_item');
  const selectionActive = document.querySelector('.selection-cb__tytle')
  const burgerMenu = document.querySelector ('.burger');

  list.forEach(item => {
    item.addEventListener('click', () => {
      list.forEach(el => { el.classList.remove('active'); });
      item.classList.add('active');
      console.log(list)
      });
  });

  if (window.matchMedia('(max-width: 768px)').matches) {
    searchBtn.addEventListener('click', function () {
      document.querySelector('.header__search').classList.add('visible');
      document.querySelector('.btn_visible').classList.add('invisible');
      document.querySelector('.header__logo').classList.add('invisible');
      document.querySelector('.burger').classList.add('invisible');
    });
  };

  if (window.matchMedia('(min-width: 768px)').matches) {
    searchBtn.addEventListener('click', function () {
      document.querySelector('.header__search').classList.add('visible');
      document.querySelector('.btn_visible').classList.add('invisible');
    });
  };


  burgerMenu.addEventListener ('click', function () {
    document.querySelector('.burger').classList.toggle('burger-active')
    document.querySelector('.nav').classList.toggle('visible')
    document.querySelector('.nav__btn').classList.toggle('visible')
  });

  modalClouse.addEventListener('click', (del) => {
    modalOverlay.classList.remove('gallery__focus_active');
    document.querySelector('body').classList.remove('block')
  });

  selectionActive.addEventListener('click', function() {
    document.querySelector('.selection-cb').classList.toggle('selection-cb__visual')
    document.querySelector('.selection-cb__tytle').classList.toggle('selection-cb__tytle_active')
  });


  // swiper
  const swiper = document.querySelector('.banner-container')
  const swiperGallery = document.querySelector('.swiper-gallery')
  const swiperPublication = document.querySelector('.publications__swiper')
  const swiperProjects = document.querySelector('.projects-swiper')
  const swiperEvents = document.querySelector('.events__swiper')

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
        slidesPerColumn: 1,
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

      1440: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
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

        1440: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 70,
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

      1440: {
        slidesPerView: 2,
        spaceBetween: 50,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
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
      active: false,
      collapsible: true,
      heightStyle: "content"
    });
  });


  //map
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.75846806898367, 37.60108849999989],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 7
    });
    // Создание геообъекта с типом точка (метка).
    // var myGeoObject = new ymaps.GeoObject({
    //   geometry: {
    //       type: "Point", // тип геометрии - точка
    //       coordinates: [55.75846806898367,37.60108849999989] // координаты точки
    //   }
    // });

    var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
      iconLayout: 'default#image',
      // iconImageHref: './img/iconmap.svg',
      iconImageSize: [30, 42],
      // iconImageOffset: [-3, -42]
    });
    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
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
          console.log(phone)
          return Number(phone) && phone.length === 10
        }
      },
    },

    messages: {
      name: {
        required: 'Как вас зовут?',
        minLength: 'Минимальное количество 2 знака',
        maxLength: 'Максимльное количество 15 знаков',
      },

      tel: 'Укажите ваш телефон',
    },

    colorWrong: '#FF5C00'
  });


  //tulltip
  tippy('.tulltip1', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'light',
  });

  tippy('.tulltip2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    theme: 'light',
  });

  tippy('.tulltip3', {
    content: 'В стремлении повысить качество',
    theme: 'light',
  });
})

