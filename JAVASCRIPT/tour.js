let slides = document.querySelectorAll('.slide')
let descriptions = document.getElementsByClassName('description')

let current = 0
let index = 2
let pre = slides.length - 1

slides[current].style.zIndex = '2';
slides[index].style.zIndex = '0';
slides[pre].style.zIndex = '1';

let t = setInterval(autoUpdate, 8000)

function autoUpdate() {
    // Hide current slide's description
    descriptions[current].querySelectorAll('span, h1, p, button').forEach(el => {
        el.style.opacity = '0';
        el.style.animation = 'none';
    });

    // Show and hidden slide
    slides[pre].style.zIndex = '0';

    slides[current].style.zIndex = '1';
    slides[current].style.animation = 'hiddenSlide 1.5s ease-in-out forwards';

    slides[index].style.zIndex = '2';
    slides[index].style.animation = 'showSlide 1.5s ease-in-out forwards';

    // Show description of the new slide with animation
    descriptions[index].querySelectorAll('span, h1, p, button').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.animation = `showcontent 2.5s ease-in-out ${i * 0.3}s 1 forwards`;
    });

    pre = current
    current = index

    index += 1

    if (index == slides.length)
        index = 0
}