import Swiper, { Navigation, Pagination } from 'swiper';

import '../libs/swiper.scss';

// /. imports

const productsSlider = new Swiper('.products-slider', {
    slidesPerView: 4,
    spaceBetween: 20
});
