const slides = document.getElementsByClassName('slide')
const dots = document.getElementsByClassName('dot')

let index = 0

slides[index].style.display = 'block'
dots[index].classList.add('active')

let curr = 0

let t = setInterval(autoUpdate, 8000)

function autoUpdate(){
    curr += 1
    updateSlide()
}

function plusSlide(n){
    curr += n
    updateSlide()
}

function currentSlide(n){
    curr = n
    updateSlide()
}

function updateSlide(){
    slides[index].style.display = 'none'
    dots[index].classList.remove('active')

    if(!(curr < slides.length)){
        curr = 0
    }

    if(curr < 0) {
        curr = slides.length - 1
    }

    index = curr

    slides[index].style.display = 'block'
    dots[index].classList.add('active') 

    resetTime()
}

function resetTime(){
    clearInterval(t)
    t = setInterval(autoUpdate, 8000)
}