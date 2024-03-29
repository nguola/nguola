const slides = document.querySelectorAll('.Slide')
const dots = document.querySelectorAll('.function_btn span')
const pre = document.querySelector('#pre')
const next = document.querySelector('#next')

var current = 0

function updateSlide(n) {
    slides[current].classList.remove('active')
    dots[current].style.background = '#1d262f'
    dots[current].style.color = '#fff'

    current = n

    slides[n].classList.add('active')   
    dots[n].style.background = 'rgba(47, 50, 47, 0.479)'
    dots[n].style.color = 'black'

    if (!(current > 0)) {
        pre.style.display = 'none'
        next.style.display = 'unset'
    }

    if (!(current + 1 < slides.length)) {
        pre.style.display = 'unset'
        next.style.display = 'none'
    }

    if(((current > 0) && (current + 1 < slides.length))){
        pre.style.display = 'unset'
        next.style.display = 'unset'
    }
}

function plus(n) {
    slides[current].classList.remove('active')
    dots[current].style.background = '#1d262f'
    dots[current].style.color = '#fff'
    
    current = current + n

    if (!(current < slides.length))
        current = 0

    if (current < 0)
        current = slides.length - 1

    dots[current].style.background = 'rgba(47, 50, 47, 0.479)'
    dots[current].style.color = 'black'
    slides[current].classList.add('active')

    if (!(current > 0)) {
        pre.style.display = 'none'
        next.style.display = 'unset'
    }

    if (!(current + 1 < slides.length)) {
        pre.style.display = 'unset'
        next.style.display = 'none'
    }

    if(((current > 0) && (current + 1 < slides.length))){
        pre.style.display = 'unset'
        next.style.display = 'unset'
    }
}