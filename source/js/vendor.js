// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import {initAutoResizeTextarea} from './vendor/auto-resize-textarea';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initAutoResizeTextarea();
  });
});
