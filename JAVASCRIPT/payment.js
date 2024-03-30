const qr = document.getElementById('qr')
const slides = document.getElementsByClassName('slide')
const payment = document.getElementById('payment')
let Status = 0

function show_qr() {
    if (Status == 0) {
        qr.style.display = 'block'
        Status = 1
    }
    else {
        qr.style.display = 'none'
        Status = 0
    }
}

function show_bank() {
    slides[0].style.animation = 'show_bank 1s forwards'

    slides[1].style.animation = 'hidden_momo 1s forwards'
}

function show_momo() {
    slides[0].style.animation = 'hidden_bank 1s forwards'

    slides[1].style.animation = 'show_momo 1s forwards'
}

function show_payment(){
    payment.style.display = 'block'
}