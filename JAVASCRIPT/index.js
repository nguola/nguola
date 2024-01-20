const back_top = document.querySelector('.back_top_page')

window.onscroll = function() {scrollfunction()};

function scrollfunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        back_top.style.display = "block";
    } else {
        back_top.style.display = "none";
    }
}

back_top.addEventListener(()=>scrollfunction())