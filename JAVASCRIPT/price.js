const slideShowEnd = document.querySelector(".slideShowEnd");
const carousel = document.querySelector(".caurousel");
const arrowBtns = document.querySelectorAll(".slideShowEnd-all a");
const firstCardWidth =   document.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth/firstCardWidth);

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const scrollDistance = btn.classList.contains('pprev') ? -firstCardWidth : firstCardWidth;
        carousel.scrollLeft += scrollDistance;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    const newScrollLeft = startScrollLeft - (e.pageX - startX);
    carousel.scrollLeft = newScrollLeft;
}

const draggingStop = (e) => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    if(window.innerWidth < 800) return;
    timeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
            carousel.scrollLeft = 0; // Nếu đến cuối, quay về slide đầu
        }
        autoPlay();
    }, 2000);
}
autoPlay();
const infiniteScroll = () =>{
    if(carousel.scrollLeft ===0){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

    }
    clearTimeout(timeoutId);
    if(!slideShowEnd.matches(":hover")) autoPlay();
    
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", draggingStop);
slideShowEnd.addEventListener("mouseenter",() =>clearTimeout(timeoutId));
slideShowEnd.addEventListener("mouseenter", autoPlay);

