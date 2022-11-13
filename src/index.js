import "./assets/styles/style.scss";

const NavBtn = document.querySelector(".header__menu-btn");

NavBtn.addEventListener("click", navBarToggle);

function navBarToggle() {
	const NavBar = document.querySelector(".false-navigation");

	if (NavBar.classList.contains("active")) {
		NavBar.classList.remove("active");
	} else {
		NavBar.classList.add("active");
	}
}
