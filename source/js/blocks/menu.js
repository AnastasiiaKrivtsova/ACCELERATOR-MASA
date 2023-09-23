import {ScrollLock} from '../utils/scroll-lock';
const navMain = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toggle');
const mainNav = document.querySelector('.header-nav__menu-wrapper');
const listItems = document.querySelectorAll('.header-nav__menu-item');
const subMenuButtons = document.querySelectorAll('.submenu__button');
const subMenuItems = document.querySelectorAll('.submenu__list-item');
const isEscapeKey = (evt) => evt.key === 'Escape';
window.scrollLock = new ScrollLock();

navMain.classList.remove('header-nav--nojs');

const openCloseMenu = () => {
  if (document.body.contains(document.querySelector('.header'))) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('header-nav--closed')) {
        navMain.classList.remove('header-nav--closed');
        navMain.classList.add('header-nav--is-open');
        window.scrollLock.disableScrolling();
        document.addEventListener('keydown', onDocumentEscapeKeydown);
      } else {
        navMain.classList.add('header-nav--closed');
        navMain.classList.remove('header-nav--is-open');
        window.scrollLock.enableScrolling();
      }
    });
  }
};

document.addEventListener('click', (evt) => {
  const click = evt.composedPath().includes(mainNav);
  if (!click) {
    if (navMain.classList.contains('header-nav--is-open')) {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--is-open');
      window.scrollLock.enableScrolling();
    }
  }
});

listItems.forEach((listItem) => listItem.addEventListener('click', (evt) => {
  if (evt) {
    if (navMain.classList.contains('header-nav--is-open')) {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--is-open');
      window.scrollLock.enableScrolling();
    }
  }
}));

const openCloseSubMenu = () => {
  if (document.body.contains(document.querySelector('.submenu'))) {
    subMenuButtons.forEach((subMenuButton) => subMenuButton.addEventListener('click', function (evt) {
      if (evt) {
        const subMenu = subMenuButton.parentElement;
        if (subMenu.classList.contains('submenu--closed')) {
          subMenu.classList.remove('submenu--closed');
          subMenu.classList.add('submenu--is-open');
          navMain.classList.add('header-nav__submenu--is-open');
        } else {
          subMenu.classList.add('submenu--closed');
          subMenu.classList.remove('submenu--opened');
          navMain.classList.remove('header-nav__submenu--is-open');
        }
      }
    }));
  }
};

subMenuItems.forEach((subMenuItem) => subMenuItem.addEventListener('click', (evt) => {
  if (evt) {
    if (navMain.classList.contains('header-nav--is-open')) {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--is-open');
      window.scrollLock.enableScrolling();
    }
  }
}));

const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    navMain.classList.add('header-nav--closed');
    navMain.classList.remove('header-nav--is-open');
    window.scrollLock.enableScrolling();
    document.removeEventListener('keydown', onDocumentEscapeKeydown);
  }
};

export {openCloseMenu, openCloseSubMenu};
