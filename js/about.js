
'use strict';

import {initTinySlider} from "./modules/slider";

document.addEventListener('DOMContentLoaded', () => {
    initTinySlider({
        container: ".services_slider",
        items: 1,
        mode: 'gallery',
        axis: 'vertical',
        nav: true,
        controls: false,
        preventScrollOnTouch: 'force',
        speed: 700
    });
    initTinySlider({
        container: ".reviews_slider",
        controlsContainer: ".reviews_slider-controls",
        items: 1,
        mode: 'carousel',
        controls: true,
        nav: false,
        loop: false,
        responsive: {
            768: {
                gutter: 30,
                items: 2
            }
        }
    });
})