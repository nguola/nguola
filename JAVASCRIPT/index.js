var slides = document.querySelectorAll('.slide')
var manual_btn = document.querySelectorAll('.manual_btn')
var auto_btn = document.querySelectorAll('.auto_btn')
const back_top = document.querySelector('.go_back_button')
const top_content = document.getElementById('top_content')
const show_menu_button = document.getElementById('showmenu')
const menu_li = document.getElementsByClassName('mainmenu')
const menu = document.querySelector('.mainmenu')
const pre_btn = document.querySelector('.pre_btn')
const next_btn = document.querySelector('.next_btn')

var current = 0
var pre = slides.length - 1

var manualNav = function (manual, pre) {
    slides.forEach((slide) => {
        slide.classList.remove('pre')

        manual_btn.forEach((btn) => {
            btn.classList.remove('pre')

            auto_btn.forEach((a_btn) => {
                a_btn.classList.remove('pre')
            })
        })
    })

    slides[pre].classList.remove('active')
    manual_btn[pre].classList.remove('active')
    auto_btn[pre].classList.remove('active')

    slides[pre].classList.add('pre')
    manual_btn[pre].classList.add('pre')
    auto_btn[pre].classList.add('pre')

    slides[manual].classList.add('active')
    manual_btn[manual].classList.add('active')
    auto_btn[manual].classList.add('active')
}

manual_btn.forEach((btn, i) => {
    slides[current].style.amination = ''

    btn.addEventListener('click', () => {
        manualNav(i, current)

        const slide_current = document.querySelector('.slides .active')
        const slide_pre = document.querySelector('.slides .pre')

        if(current > i){
            slide_current.style.animation = 'slide_pre_show 3s'
            slide_pre.style.animation = 'slide_pre_off 3s'
        }
        else{
            slide_current.style.animation = 'slide_next_show 3s'
            slide_pre.style.animation = 'slide_next_off 3s'
        }

        current = i
    })
})

pre_btn.addEventListener('click', ()=> {
    pre = current
    if(current == 0)
        current = slides.length - 1
    else
        current--

    manualNav(current, pre)

    const slide_current = document.querySelector('.slides .active')
    const slide_pre = document.querySelector('.slides .pre')

    slide_current.style.animation = 'slide_pre_show 3s'
    slide_pre.style.animation = 'slide_pre_off 3s'
})

next_btn.addEventListener('click', ()=> {
    pre = current
    if(current == slides.length - 1)
        current = 0
    else
        current++

    manualNav(current, pre)

    const slide_current = document.querySelector('.slides .active')
    const slide_pre = document.querySelector('.slides .pre')

    slide_current.style.animation = 'slide_next_show 3s'
    slide_pre.style.animation = 'slide_next_off 3s'
})

setInterval(() => {
    
    var tmp = current

    if(current == slides.length - 1)
        current = 0
    else
        current++

    manualNav(current, tmp)

    const slide_current = document.querySelector('.slides .active')
    const slide_pre = document.querySelector('.slides .pre')

    slide_current.style.animation = 'slide_next_show 3s'
    slide_pre.style.animation = 'slide_next_off 3s'
}, 12000);

window.onscroll = function (){
    if(document.documentElement.scrollTop > 150) {
        back_top.style.display = "block";

    } else {
        back_top.style.display = "none";
    }
}