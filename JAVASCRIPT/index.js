var slides = document.querySelectorAll('.slide')
var manual_btn = document.querySelectorAll('.manual_btn')
var auto_btn = document.querySelectorAll('.auto_btn')
const pre_btn = document.querySelector('.pre_btn')
const next_btn = document.querySelector('.next_btn')

const tours = document.querySelectorAll('.tour')

const back_top = document.querySelector('.go_back_button')

var current = 0
var active = 2

var manualNav = function (manual, pre) {
    var pre_element_array = document.querySelectorAll('.pre')

    pre_element_array.forEach((element) => {
        element.classList.remove('pre')
    })

    slides[pre].classList.add('pre')
    auto_btn[pre].classList.add('pre')
    
    slides[pre].classList.remove('current')
    auto_btn[pre].classList.remove('current')

    slides[manual].classList.add('current')
    auto_btn[manual].classList.add('current')
}

var show_slide_next = function (current, pre) {
    slides[current].style.animation = 'slide_show_right 2s'
    slides[pre].style.animation = 'slide_off_left 2s'
}

var show_slide_pre = function (current, pre) {
    slides[current].style.animation = 'slide_show_left 2s'
    slides[pre].style.animation = 'slide_off_right 2s'
}

manual_btn.forEach((btn, i) => {
    btn.addEventListener('click', () => {

        manualNav(i, current)

        if (current > i) {
            show_slide_pre(i, current)
        }
        else {
            show_slide_next(i, current)
        }

        current = i
    })
})

pre_btn.addEventListener('click', () => {
    var pre = current
    if (current == 0)
        current = slides.length - 1
    else
        current--

    manualNav(current, pre)

    show_slide_pre(current, pre)
})

next_btn.addEventListener('click', () => {
    var pre = current
    if (current == slides.length - 1)
        current = 0
    else
        current++

    manualNav(current, pre)

    show_slide_next(current, pre)
})

setInterval(() => {

    var pre = current

    if (current == slides.length - 1)
        current = 0
    else
        current++

    manualNav(current, pre)

    show_slide_next(current, pre)
}, 15000);

tours.forEach((tour, i)=>{
    tour.addEventListener('click', ()=>{
        tours[active].classList.remove('active')
        tours[i].classList.add('active')
        active = i
    })
})

window.onscroll = function () {
    if (document.documentElement.scrollTop > 150) {
        back_top.style.display = "block";

    } else {
        back_top.style.display = "none";
    }
}