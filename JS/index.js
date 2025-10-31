const header = document.querySelector(".header");
const burger = header.querySelector(".menu-icon");
const burgerIcon = header.querySelector(".menu-icon__img");

burger.addEventListener("click", function () {
    header.classList.toggle("header--mobile");

    if (header.classList.contains("header--mobile")) {
        burgerIcon.src = "Img/burger-menu-close.svg"
    } else {
        burgerIcon.src = "Img/Burger-main.svg"
    }
})