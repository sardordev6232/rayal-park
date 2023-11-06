

var navMenu = document.querySelector('.nav__menu')
var gamburger = document.querySelector('.gamburger')

gamburger.addEventListener('click' , () => {
    gamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}) 