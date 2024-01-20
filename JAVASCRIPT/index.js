const showMenu = document.getElementsByClassName('showmenu')

const back_top = document.querySelector('.back_top_page')
const topmenu = document.querySelector('.header')
const menu = document.querySelector('.header .nav')

var check = true

window.onscroll = function() {scrollfunction()};

function scrollfunction(){
    if(document.documentElement.scrollTop > 50) {
        topmenu.style.position = "fixed";
        topmenu.style.opacity = '100%'
        topmenu.style.height = '65px'
        menu.style.display = 'none';
        check = false;
        back_top.style.display = "block";
    } else {
        topmenu.style.position = "absolute";
        topmenu.style.opacity = '80%'
        topmenu.style.height = '150px'
        menu.style.display = 'flex';
        check = true;
        back_top.style.display = "none";
    }
}


showMenu[0].addEventListener('click', ()=>{
    if(check){
        topmenu.style.height = '65px'
        menu.style.display = 'none';
        check = false;
    }
    else{
        topmenu.style.height = '150px'
        menu.style.display = 'flex';
        check = true;
    }
})