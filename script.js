const button = document.querySelector('#menu-btn')
const navRight = document.querySelector('.navbar-container-nav-right')
const navLeft = document.querySelector('.navbar-container-nav-left')
const mobileMenu = document.querySelector('#menu')

const navToggle = (e) => {
    button.classList.toggle('hamburger-open')
    mobileMenu.classList.toggle('mobile-hidden')
    document.body.classList.toggle('no-scroll')
}

button.addEventListener('click', navToggle)