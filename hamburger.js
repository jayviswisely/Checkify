const hamburger = document.querySelector(".nav-hamburger");
const navList = document.querySelector(".nav-list-mobile");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
    nav.classList.toggle("active");
}
)

document.querySelectorAll(".mobile-link").forEach(n => n.addEventListener("click", () =>
{
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    nav.classList.toggle("active");
}
)
)