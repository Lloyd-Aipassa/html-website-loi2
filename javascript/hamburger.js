const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".mobile-menu");

hamburgerMenu.addEventListener("click", () => {
	menu.classList.toggle("show");
	hamburgerMenu.classList.toggle("open");
});
