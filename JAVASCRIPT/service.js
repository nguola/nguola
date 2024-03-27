const nav = document.getElementsByTagName('nav');
const logo = document.getElementById('logo');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 400) {
        nav[0].style.position = 'fixed'
        logo.style.position = 'fixed'
        logo.style.width = '5%'
        nav[0].style.width = '100%'
        nav[0].style.animation = 'showNavbar 1s forwards';
        logo.style.animation = 'showNavbar 1s forwards';
    } else {
        nav[0].style.animation = 'hiddenNavbar 1.5s forwards';
        logo.style.animation = 'hiddenNavbar 1s forwards';
        logo.style.width = '100px'
    }
}