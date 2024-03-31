const form = document.getElementById('form_apply')
const open_btn = document.getElementById('open_form')
const close_btn = document.getElementById('close_form')

const slide_btn = document.getElementsByClassName('btn_slide')
const services_btn = document.getElementsByClassName('services')
const slide = document.getElementsByClassName('slide')

const nav = document.getElementsByTagName('nav');
const logo = document.getElementById('logo');

function open_form(){
    form.style.right = '0px'
}

function close_form(){
    form.style.right = '-100%'
}

let current = 0

function updateSlide(n){
    slide[current].classList.remove('current')
    slide_btn[current].classList.remove('active')

    slide[n].classList.add('current')
    slide_btn[n].classList.add('active')

    current = n
}

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        nav[0].style.position = 'fixed'
        nav[0].style.width = '100%'
        nav[0].style.animation = 'showNavbar 1s forwards';
        logo.style.position = 'fixed'
        logo.style.width = '5%'
        logo.style.animation = 'showNavbar 1s forwards';

        open_btn.style.right = '10px'
    } 
    else {
        nav[0].style.animation = 'hiddenNavbar 1.5s forwards';
        logo.style.animation = 'hiddenNavbar 1s forwards';
        logo.style.width = '100px'

        open_btn.style.right = '-100%'
    }
}