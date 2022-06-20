
'use strict';

import { Collapse } from "bootstrap";

function drawAccordion() {
    const triggers = document.querySelectorAll('.accordion-trigger');
    const wrappers = document.querySelectorAll('.accordion-wrapper');
    const icons = document.querySelectorAll('.accordion-trigger_icon');


    function checkIconClass() {
        wrappers.forEach((el, index) => {
            if (el.classList.contains('expanded')) {
                icons[index].classList.remove('icon-plus');
                icons[index].classList.add('icon-minus');
            } else {
                icons[index].classList.add('icon-plus');
                icons[index].classList.remove('icon-minus');
            }
        })
    }

    triggers.forEach((el, i) => {
        el.addEventListener('click', e => {
            e.preventDefault();
            wrappers[i].classList.toggle('expanded');
            checkIconClass();
        })
    })

}

export default drawAccordion;