
'use strict';

import svg4everybody from "svg4everybody";
import LazyLoad from "vanilla-lazyload";
import AOS from 'aos';
import { setAnimationOptions, setCurrentYear } from "./modules/helpers";
import validateForms from "./modules/forms";
import { drawNav, scrollTop, setActivePageClass } from "./modules/nav";
import animateNumber from "./modules/count";
import { initGallery } from "./modules/gallery";
import initFilter from "./modules/filter";
import initMap from "./modules/map";

document.addEventListener('DOMContentLoaded', () => {
    const lazyload = new LazyLoad();
    svg4everybody();
    drawNav();
    scrollTop();
    setActivePageClass();

    window.addEventListener('load', () => {
        AOS.init();
    })
    setAnimationOptions();
    animateNumber();

    initGallery('.gallery_list');
    initGallery('.gallery_grid');
    initGallery('.gallery_masonry');
    initFilter('.gallery_masonry', '.gallery_filters-filter', {
        itemSelector: '.gallery_masonry-item'
    });

    validateForms('#newsletterForm');
    validateForms('#newsletterForm--widget');
    validateForms('[name="feedbackForm"]');
    validateForms('[name="replyForm"]');

    initMap('#map');
    setCurrentYear();
})