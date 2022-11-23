'use strict';

    let obj = document.getElementById("action__love");
    obj.addEventListener('click', () => {
        let path = document.getElementById("love");
        path.classList.toggle('redlove');
    })