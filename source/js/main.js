import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {setHeroSwiper, setProgramsSwiper, setReviewsSwiper, setNewsSwiper} from './blocks/page-swiper';
import {openCloseMenu, openCloseSubMenu} from './blocks/menu';
import {CustomSelect} from './modules/form-validate/custom-select';
import {initAccordions} from './blocks/init-accordion';
import {setNewsButton} from './blocks/news-sorter';
import {marker, map} from './blocks/map';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  setHeroSwiper();
  setProgramsSwiper();
  setReviewsSwiper();
  setNewsSwiper();
  openCloseMenu();
  openCloseSubMenu();
  initAccordions();
  marker;
  map;
  setNewsButton();

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    const select = new CustomSelect();
    select.init();
  });
});
// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
