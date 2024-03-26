

//
let slides = document.querySelectorAll('.slide');
let descriptions = document.querySelectorAll('.description');

const nav = document.getElementsByTagName('nav');

let current = 0;
let index = 0;

let t = setInterval(autoUpdate, 5000);

function autoUpdate() {
    index = (current + 1) % slides.length;

    if(!(index <= slides.length))
    index = 0

    // Hide current slide's description
    descriptions[current].querySelectorAll('span, h1, p, button').forEach(el => {
        el.style.opacity = '0';
        el.style.animation = 'none';
    });

    slides[current].style.zIndex = '1';
    slides[current].style.animation = 'hiddenSlide 1.5s ease-in-out forwards';

    slides[index].style.zIndex = '2';
    slides[index].style.animation = 'showSlide 1.5s ease-in-out forwards';

    // Show description of the new slide with animation
    descriptions[index].querySelectorAll('span, h1, p, button').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.animation = `showcontent 2.5s ease-in-out ${i * 0.3}s 1 forwards`;
    });

    current = index;

    let pre = current - 1 < 0 ? slides.length - 1 : current - 1;
    slides[pre].style.zIndex = '0';

    console.log(index);
}

window.onscroll = function () {
    if (document.documentElement.scrollTop > 400) {
        nav[0].style.position = 'fixed';
        nav[0].style.width = '100%';
        nav[0].style.animation = 'showNavbar 1s forwards';
    } else {
        nav[0].style.animation = 'hiddenNavbar 1.5s forwards';
    }
}