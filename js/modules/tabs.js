
'use strict';

function drawTabs(selector, trigger, content = '.content') {
    const tabs = document.querySelector(selector);
    const tabButton = document.querySelectorAll(trigger);
    const contents = document.querySelectorAll(content);

    tabs.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");

            contents.forEach(content => {
                content.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })
}

export default drawTabs;