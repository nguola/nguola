var slides = document.querySelectorAll('.slide')
var manual_btn = document.querySelectorAll('.manual_btn')
var auto_btn = document.querySelectorAll('.auto_btn')
const back_top = document.querySelector('.go_back_button')
const top_content = document.getElementById('top_content')
const show_menu_button = document.getElementById('showmenu')
const menu_li = document.getElementsByClassName('mainmenu')
const menu = document.querySelector('.mainmenu')

var current = 0

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
        current = i
    })
})

setInterval(() => {
    slides[current].style.amination = ''
    
    var tmp = current

    if(current == slides.length - 1)
        current = 0
    else
        current++

    manualNav(current, tmp)
}, 12000);

window.onscroll = function (){
    if(document.documentElement.scrollTop > 150) {
        back_top.style.display = "block";

    } else {
        back_top.style.display = "none";
    }
}