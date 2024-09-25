import Slidenav  from './slide.js'

const slidenav = new Slidenav('.slide', '.slide-wrapper');

slidenav.init();
slidenav.addArrow('.prev', '.next');
slidenav.addControl('.custom-controls');