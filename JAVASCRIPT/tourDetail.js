let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

setInterval(showSlider, 3000);
let timeRunning = 2000;
let runTimeOut;
function showSlider() {
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
  listItemDom.appendChild(itemSlider[0]);
  thumbnailDom.appendChild(itemThumbnail[0]);
  carouselDom.classList.add('next1');
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next1');
  }, timeRunning);
}