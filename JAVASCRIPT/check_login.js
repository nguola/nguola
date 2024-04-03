let sts = localStorage.getItem('status')

let login_display = document.querySelectorAll('.login_signin')
let account_display = document.querySelectorAll('.account')

let logout_btn = document.querySelector('#logout')

window.onload = function(){
    check_login()
}

function check_login(){
    console.log(sts)

    if (sts !== null) {
        login_display[0].style.display = 'none'
        account_display[0].style.display = 'block'
    }
    else {
        login_display[0].style.display = 'flex'
        account_display[0].style.display = 'none'
    }
    
    logout_btn.addEventListener('click', ()=>{
        localStorage.removeItem('status')
        login_display[0].style.display = 'flex'
        account_display[0].style.display = 'none'
    })
}