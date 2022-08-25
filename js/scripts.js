window.addEventListener('DOMContentLoaded', () => {

    const ham = document.querySelector('.hamburger'),
          bar = document.querySelector('.navbar-menu'),
          links = bar.querySelectorAll('.navbar-item'),
          section = document.querySelectorAll('section');
        

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

    bar.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('navbar-item')) {
            links.forEach((item, i) => {
                if (event.target == item) {
                    section[i].scrollIntoView();
                }
            });
        }
    });
});