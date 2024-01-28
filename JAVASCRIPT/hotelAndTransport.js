const showHotel = document.getElementById('hotel_button')
const showTransport = document.getElementById('transport_button')

const hotel_display = document.querySelector('.main .content .hotel')
const transport_display = document.querySelector('.main .content .transport')

showHotel.addEventListener('click', ()=>{
    hotel_display.style.display = 'block';
    transport_display.style.display = 'none';
})

showTransport.addEventListener('click', ()=>{
    hotel_display.style.display = "none";
    transport_display.style.display = 'block';
})