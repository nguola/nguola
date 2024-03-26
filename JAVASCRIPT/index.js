const slides = document.getElementsByClassName('slide')
const dots = document.getElementsByClassName('dot')
const nav = document.getElementsByTagName('nav');

let index = 0

slides[index].style.display = 'block'
dots[index].classList.add('active')

let curr = 0

let t = setInterval(autoUpdate, 8000)

function autoUpdate() {
    curr += 1
    updateSlide()
}

function plusSlide(n) {
    curr += n
    updateSlide()
}

function currentSlide(n) {
    curr = n
    updateSlide()
}

function updateSlide() {
    slides[index].style.display = 'none'
    dots[index].classList.remove('active')

    if (!(curr < slides.length)) {
        curr = 0
    }

    if (curr < 0) {
        curr = slides.length - 1
    }

    index = curr

    slides[index].style.display = 'block'
    dots[index].classList.add('active')

    resetTime()
}

function resetTime() {
    clearInterval(t)
    t = setInterval(autoUpdate, 8000)
}

window.onscroll = function () {
    if (document.documentElement.scrollTop > 500) {
        nav[0].style.position = 'fixed'
        nav[0].style.width = '100%'
        nav[0].style.animation = 'showNavbar 1s forwards';
    } else {
        nav[0].style.animation = 'hiddenNavbar 1.5s forwards';
    }
}