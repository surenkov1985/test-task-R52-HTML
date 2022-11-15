"use strict";

const ModalBg = document.querySelector(".modal__bg"),
	IdBtn = document.querySelector(".footer__id-btn"),
	EmailInput = document.querySelector(".input-email"),
	Modal = document.querySelector(".modal");

//////////   Открытие/закрытие модального окна   ///////////

IdBtn.addEventListener("click", modalOpen);
ModalBg.addEventListener("click", function(e) {
	if (e.target.classList.contains("modal__bg")) {
		modalClose(e);
	}
});

function modalOpen() {
	Modal.classList.add("active");
	document.body.style.overflowY = "hidden";
	EmailInput.focus();
}
function modalClose(e) {
	Modal.classList.remove("active");
	document.body.style.overflowY = "inherit";
}
