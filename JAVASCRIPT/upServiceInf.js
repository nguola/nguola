function upInf_hotel(img_src, name, price){
    let url = 'service.html'
    let inf = {img_src, name, price, url}
    localStorage.setItem('inf', JSON.stringify(inf))
    window.location.href = 'detail_hotel.html'
}

function upInf_hos(img_src, name, price){
    let url = 'service.html'
    let inf = {img_src, name, price, url}
    localStorage.setItem('inf', JSON.stringify(inf))
    window.location.href = 'detail_hospital.html'
}

function upInf_resort(img_src, name, price){
    let url = 'service.html'
    let inf = {img_src, name, price, url}
    localStorage.setItem('inf', JSON.stringify(inf))
    window.location.href = 'detail_resort.html'
}

function upInf_restau(img_src, name, price){
    let url = 'service.html'
    let inf = {img_src, name, price, url}
    localStorage.setItem('inf', JSON.stringify(inf))
    window.location.href = 'detail_restaurant.html'
}

function upInf_trans(img_src, name, price){
    let url = 'service.html'
    let inf = {img_src, name, price, url}
    localStorage.setItem('inf', JSON.stringify(inf))
}