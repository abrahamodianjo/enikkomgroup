
'use strict';

import { initHeroSlider, initThumbSliderNav, initTinySlider, setBackground }from "./modules/slider";
import drawProcessSteps from "./modules/steps";

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initThumbSliderNav();
    setBackground('.hero_thumbs-thumb_inner', '.hero_thumbs-thumb');

    initTinySlider({
        container: '.feedback_slider',
        items: 1,
        mode: 'gallery',
        nav: true,
        controls: false,
        speed: 100
    });
    drawProcessSteps();
})
