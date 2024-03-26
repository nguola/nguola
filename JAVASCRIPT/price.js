const nav = document.getElementsByTagName('nav');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 400) {
        nav[0].style.position = 'fixed'
        nav[0].style.width = '100%'
        nav[0].style.animation = 'showNavbar 1s forwards';
    } else {
        nav[0].style.animation = 'hiddenNavbar 1.5s forwards';
    }
}