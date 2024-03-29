const form = document.getElementById('form_apply')
const open_btn = document.getElementById('open_form')
const close_btn = document.getElementById('close_form')

const slide_btn = document.getElementsByClassName('btn_slide')
const services_btn = document.getElementsByClassName('services')
const slide = document.getElementsByClassName('slide')

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