import tabs from './modules/tabs';
import slider from './modules/slider';

document.addEventListener('DOMContentLoaded', () => {
  tabs('.tabcontainer', '.tabcontent', '.tabheader__item', 'tabheader__item_active');
  slider({
    container: '.offer__slider',
    wrapper: '.offer__slider-wrapper',
    inner: '.offer__slider-inner',
    slides: '.offer__slide',
    currentCount: '#current',
    totalCount: '#total',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev'
  });  

});