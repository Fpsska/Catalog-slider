import Swiper, { Navigation, Pagination } from 'swiper';

import '../libs/swiper.scss';

// /. imports

const productsSlider = new Swiper('.products-slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next-products',
        prevEl: '.swiper-button-prev-products'
    },
    breakpoints: {
        320: {
            slidesPerView: 1.1
        },
        475: {
            slidesPerView: 1.6
        },
        768: {
            slidesPerView: 2.4
        },
        1024: {
            slidesPerView: 3.1
        },
        1366: {
            slidesPerView: 4
        }
    }
});

const imageProductSlider = new Swiper('.product-image-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});
