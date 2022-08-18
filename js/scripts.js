"use strict";

const ham = document.querySelector('.hamburger'),
      bar = document.querySelector('.navbar-menu'),
      links = bar.querySelectorAll('a');
      

ham.addEventListener('click', () => {
    ham.classList.toggle("active");
    bar.classList.toggle("active");
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        ham.classList.remove("active");
        bar.classList.remove("active");
    });
});