let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

setInterval(showSlider, 2500);
let timeRunning = 1500;
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


function goToThanhToan() {
  let check_in = $('#check_in');
  let check_out = $('#check_out');
  let numPeople = $('#NumberPeople');

  if (!check_in.val()) {
    alert('Chưa nhập ngày check_in');
    return false;
  }
  if (!check_out.val()) {
    alert('Chưa nhập ngày check out');
    return false;
  }

  if (!numPeople.val()) {
    alert('Chưa nhập số lượng người');
    return false;
  }

  let check_in_date = new Date(check_in.val());
  let check_out_date = new Date(check_out.val());

  if (check_in_date < new Date()) {
    alert('Ngày check in phải sau ngày hiện tại');
    return false;
  }
  if (check_in_date > check_out_date) {
    alert('Ngày check in phải trước ngày check out');
    return false;
  }

  let price = $('.price').eq(0).text();
  let name = $('.header h1').eq(0).text();
  let img = $('.list .item img').eq(0).attr('src');
  let currentURL = window.location.href;
  let url = currentURL.substring(currentURL.lastIndexOf("/") + 1);
  let pre_tour = {
    img,
    name,
    price,
    url
  }
  localStorage.setItem('pre_tour', JSON.stringify(pre_tour));

  window.location.href = 'payment.html';
}