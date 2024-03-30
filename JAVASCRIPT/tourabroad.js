const slides = document.querySelectorAll('.Slide')
const pre = document.querySelector('#pre')
const next = document.querySelector('#next')

var current = 0
function updateSlide(n) {
    slides[current].classList.remove('active')

    slides[n].classList.add('active')

    current = n

    if (!(current > 0)) {
        pre.style.display = 'none'
        next.style.display = 'unset'
    }

    if (!(current + 1 < slides.length)) {
        pre.style.display = 'unset'
        next.style.display = 'none'
    }

    if (((current > 0) && (current + 1 < slides.length))) {
        pre.style.display = 'unset'
        next.style.display = 'unset'
    }
}

function plus(n) {
    slides[current].classList.remove('active')

    current = current + n

    slides[current].classList.add('active')

    if (!(current > 0)) {
        pre.style.display = 'none'
        next.style.display = 'unset'
    }

    if (!(current + 1 < slides.length)) {
        pre.style.display = 'unset'
        next.style.display = 'none'
    }

    if (((current > 0) && (current + 1 < slides.length))) {
        pre.style.display = 'unset'
        next.style.display = 'unset'
    }
}