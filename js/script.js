
const header = document.querySelector("header")
const botaoMenuMobile = document.querySelector(".open-navbar-mobile-btn")
const animatedElements = document.querySelectorAll("[data-animation]")
const animatedDelayElements = document.querySelectorAll("[data-animation-delay]")

if (screen.width <= 992) {
    header.classList.add("close")
}

botaoMenuMobile.addEventListener("click", () => {
    botaoMenuMobile.classList.toggle("close")
    header.classList.toggle("close")
})

animatedElements.forEach((el) => {
    if (window.scrollY + (window.innerHeight * 3 / 4) >= el.offsetTop || el.id == "partners-swiper") {
        el.classList.add("show")
    }
    if (el.dataset.animationDelay != "") {
        el.style.transitionDelay = `${el.dataset.animationDelay / 1000}s`
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 0 && screen.width > 992) {
        header.classList.add("scrolled")
    } else header.classList.remove("scrolled")

    animatedElements.forEach((el) => {
        if (window.scrollY + (window.innerHeight * 3 / 4) >= el.offsetTop) {
            el.classList.add("show")
        }
    })
})