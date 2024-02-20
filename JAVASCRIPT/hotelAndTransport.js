const back_top = document.querySelector('.go_back_button')

window.onscroll = function (){
    if(document.documentElement.scrollTop > 150) {
        back_top.style.display = "block";

    } else {
        back_top.style.display = "none";
    }
}