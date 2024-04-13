const nav = document.getElementsByTagName('nav');
const logo = document.getElementById('logo');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        nav[0].style.position = 'fixed'
        nav[0].style.width = '100%'
        nav[0].style.zIndex = '1000'
        nav[0].style.animation = 'showNavbar 1s forwards';
        logo.style.position = 'fixed'
        logo.style.width = '5%'
        logo.style.zIndex = '1001'
        logo.style.animation = 'showNavbar 1s forwards';
    } 
    else {
        nav[0].style.animation = 'hiddenNavbar 1.5s forwards';
        logo.style.animation = 'hiddenNavbar 1s forwards';
        logo.style.width = '100px'
    }
}