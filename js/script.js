
const header = document.querySelector("header")
const botaoMenuMobile = document.querySelector(".open-navbar-mobile-btn")

if(screen.width <= 992) {
    header.classList.add("close")
}

botaoMenuMobile.addEventListener("click", () => {
    botaoMenuMobile.classList.toggle("close")
    header.classList.toggle("close")
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 0 && screen.width > 992) {
        header.classList.add("scrolled")
    } else header.classList.remove("scrolled")
})