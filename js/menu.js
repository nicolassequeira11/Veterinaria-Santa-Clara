
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.nav-links');

ham.addEventListener('click', () => {
    
    enlaces.classList.toggle('activado');

});