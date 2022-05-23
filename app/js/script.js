const changeIcons = document.querySelector(".toggler");
const logo = document.querySelector(".logo");
const menuLinks = document.querySelector(".menu-links");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const slides = document.querySelectorAll(".intro");
let currentSlide = 0


function nextImage(direction) {
    if (direction === 'next') {
        currentSlide++;
        if (currentSlide === slides.length) {
            currentSlide = 0
        }
    }else {
        if (currentSlide === 0) {
            currentSlide = slides.length -1
        } else {
            currentSlide--
        }
    }
    slides.forEach(slide => {
        slide.style.display = 'none'
    })
    slides[currentSlide].style.display = 'block'
}

setInterval(() => {
    nextImage('next')
}, 5000)

changeIcons.addEventListener('click', () => {
    menu.classList.toggle("nav-active")
    logo.classList.toggle("logo-edit")
    menuLinks.classList.toggle("nav-active")
    overlay.classList.toggle("nav-active")
})

