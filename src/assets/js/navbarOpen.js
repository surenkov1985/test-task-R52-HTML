"use strict";

const NavBtn = document.querySelector(".header__menu-btn"),
	NavMenu = document.querySelector(".false-navigation"),
	NavBar = document.querySelector(".false-navigation");

//////////   Открытие/закрытие бокового меню   ///////////

NavBtn.addEventListener("click", navBarOpen);
NavMenu.addEventListener("click", function(e) {
	if (e.target.classList.contains("false-navigation")) {
		navBarClose(e);
	}
});

function navBarOpen() {
	NavBar.classList.remove("close");
	NavBar.classList.add("active");
	document.body.style.overflowY = "hidden";
}

function navBarClose(e) {
	NavBar.classList.remove("active");
	NavBar.classList.add("close");
	document.body.style.overflowY = "inherit";
}
