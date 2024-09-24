import {Slide, Slidenav}  from './slide.js'

//const slide = new Slide('.slide', '.slide-wrapper');
const slidenav = new Slidenav('.slide', '.slide-wrapper');

slidenav.init();
slidenav.addArrow('.prev', '.next');
slidenav.addControl();