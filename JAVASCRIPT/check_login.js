let sts = localStorage.getItem('status')

let login_display = document.querySelectorAll('.login_signin')
let account_display = document.querySelectorAll('.account')
let user_current = localStorage.getItem('user_current')

let logout_btn = document.querySelector('#logout')

window.onload = function(){
    check_login()
}

function check_login(){
    if (sts !== null) {
        login_display[0].style.display = 'none'
        account_display[0].style.display = 'block'
        let user_name = document.querySelector('#user_name')
        user_name.innerHTML += user_current
    }
    else {
        login_display[0].style.display = 'flex'
        account_display[0].style.display = 'none'
    }
    
    logout_btn.addEventListener('click', ()=>{
        let account = JSON.parse(localStorage.getItem(user_current))
        account.status = 0;
        localStorage.setItem(user_current, JSON.stringify(account));
        localStorage.removeItem('user_current')
        localStorage.removeItem('status')
        login_display[0].style.display = 'flex'
        account_display[0].style.display = 'none'
    })
}