import "./assets/styles/style.scss";

const NavBtn = document.querySelector(".header__menu-btn");
const NavMenu = document.querySelector(".false-navigation");
const ModalBg = document.querySelector(".modal__bg");
const IdBtn = document.querySelector(".footer__id-btn");
const EmailInput = document.querySelector(".input-email");
const PhoneInput = document.querySelector(".input-phone");
const AgeInput = document.querySelector(".input-age");
const GenderInput = document.querySelectorAll(".input-gender");
const Form = document.querySelector(".modal__form");
const AgeBlock = document.querySelector(".age");
const SubmitButton = document.querySelector(".modal__submit");

const inputEvents = ["input", "keydown", "blur", "change"];

NavBtn.addEventListener("click", navBarOpen);
NavMenu.addEventListener("click", (e) => navBarClose(e));
IdBtn.addEventListener("click", modalOpen);
ModalBg.addEventListener("click", (e) => modalClose(e));
const IncButton = document.querySelector(".inc");
const DecButton = document.querySelector(".dec");
const Modal = document.querySelector(".modal");

function navBarOpen() {
	const NavBar = document.querySelector(".false-navigation");

	NavBar.classList.remove("close");
	NavBar.classList.add("active");
	document.body.style.overflowY = "hidden";
}

function navBarClose(e) {
	const NavBar = document.querySelector(".false-navigation");

	if (e.target.classList.contains("false-navigation")) {
		NavBar.classList.remove("active");
		NavBar.classList.add("close");
		document.body.style.overflowY = "inherit";
	}
}

function modalOpen() {
	Modal.classList.add("active");
	document.body.style.overflowY = "hidden";
	EmailInput.focus();
}
function modalClose(e) {
	const Modal = document.querySelector(".modal");

	if (e.target.classList.contains("modal__bg")) {
		Modal.classList.remove("active");
		document.body.style.overflowY = "inherit";
	}
}

function testValue(elem, reg, errString, errElem, next) {
	let str = elem.value;

	let test = reg.test(str);

	if (!str.length) {
		errElem.textContent = "Поле не должно быть пустым";
		EmailInput.style.color = "#ff0000";
		EmailInput.style.background = "rgba(255, 0, 0, 0.2)";
		EmailInput.style.borderColor = "#ff0000";
	} else if (test) {
		next.focus();
	} else {
		errElem.textContent = errString;
		EmailInput.style.color = "#ff0000";
		EmailInput.style.background = "rgba(255, 0, 0, 0.2)";
		EmailInput.style.borderColor = "#ff0000";
	}
}

inputEvents.forEach((event) => {
	EmailInput.addEventListener(event, function (e) {
		const errElem = document.querySelector(".email-err");
		let key = e.key;
		let regexp =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let testString = "Введите валидный email";

		errElem.textContent = "";
		EmailInput.style.color = "#000000";
		EmailInput.style.background = "#ffffff";
		EmailInput.style.borderColor = "#000000";

		if (key === "Enter") {
			// e.preventDefault();

			testValue(EmailInput, regexp, testString, errElem, PhoneInput);
		}
	});

	PhoneInput.addEventListener(event, function (e) {
		const errElem = document.querySelector(".phone-err");
		let key = e.key;
		let regexp = /^((7|8|\+7)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{5,15}$/;
		let testString = "Введите валидный номер";

		errElem.textContent = "";
		PhoneInput.style.color = "#000000";
		PhoneInput.style.background = "#ffffff";
		PhoneInput.style.borderColor = "#000000";

		if (key === "Enter") {
			e.preventDefault();

			testValue(PhoneInput, regexp, testString, errElem, GenderInput[0]);
		}
	});
	GenderInput.forEach((elem) => {
		elem.addEventListener("change", function (e) {
			if (elem.value === "М") {
				console.log(elem.value);
				AgeBlock.style.display = "flex";
			} else {
				AgeBlock.style.display = "none";
			}
		});

		elem.addEventListener("keypress", function (e) {
			if (e.key === "Enter") {
				e.preventDefault();
				if (elem.value === "М") {
					AgeInput.focus();
				} else {
					SubmitButton.focus();
				}
			}
		});
	});

	AgeInput.addEventListener(event, function (e) {
		let key = e.key;
		let errElem = document.querySelector(".age-err");
		let age = AgeInput.value;
		let minVal = 18;
		let maxVal = 65;

		errElem.textContent = "";
		AgeInput.style.color = "#000000";
		AgeInput.style.background = "#ffffff";
		AgeInput.style.borderColor = "#000000";

		if (key === "Enter") {
			e.preventDefault();
			if (+age < minVal) {
				AgeInput.value = minVal;
				SubmitButton.focus();
				errElem.textContent = `Минимальный возраст ${minVal} лет`;
				AgeInput.style.color = "#ff0000";
				AgeInput.style.background = "rgba(255, 0, 0, 0.2)";
				AgeInput.style.borderColor = "#ff0000";

				setTimeout(() => {
					errElem.textContent = "";
					AgeInput.style.color = "#000000";
					AgeInput.style.background = "#ffffff";
					AgeInput.style.borderColor = "#000000";
				}, 1500);
			} else if (+age > maxVal) {
				AgeInput.value = maxVal;
				SubmitButton.focus();
				errElem.textContent = `Максимальный возраст ${maxVal} лет`;
				AgeInput.style.color = "#ff0000";
				AgeInput.style.background = "rgba(255, 0, 0, 0.2)";
				AgeInput.style.borderColor = "#ff0000";

				setTimeout(() => {
					errElem.textContent = "";
					AgeInput.style.color = "#000000";
					AgeInput.style.background = "#ffffff";
					AgeInput.style.borderColor = "#000000";
				}, 1500);
			}
			SubmitButton.focus();
		}
	});
});

DecButton.addEventListener("click", function (e) {
	e.preventDefault();
	let age = Number(AgeInput.value);
	let minAge = 18;

	if (age > minAge) {
		age -= 1;
	}

	AgeInput.value = age;
});

IncButton.addEventListener("click", function (e) {
	e.preventDefault();
	let age = Number(AgeInput.value);
	let maxAge = 65;

	if (age < maxAge) {
		age += 1;
	}

	AgeInput.value = age;
});

Form.addEventListener("submit", function (e) {
	e.preventDefault();

	const ModalResult = document.querySelector(".modal__result");
	const email = Form.querySelector("[name='email']");
	const phone = Form.querySelector("[name='phone']");
	const gender = Form.querySelector("[name='gender']");
	const age = Form.querySelector("[name='age']");
	const url = new URLSearchParams(document.location.search);
	const formData = {
		email: email.value,
		phone: phone.value,
		gender: gender.value,
		age: age.value,
	};
	for (let key of url) {
		formData[key[0]] = key[1];
	}
	fetch("https://jsonplaceholder.typicode.com/users", {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(formData),
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			ModalResult.style.display = "flex";
			ModalResult.innerHTML = "Успешно Отправлено!";
			setTimeout(() => {
				ModalResult.style.display = "none";
				ModalResult.innerHTML = "";
				Modal.classList.remove("active");
				AgeBlock.style.display = "none";
				email.value = "";
				phone.value = "";
				gender.value = "";
				gender.checked = false;
				age.value = 18;
			}, 3000);
		})
		.catch((err) => {
			ModalResult.style.display = "block";
			ModalResult.textContent = "Сервер недоступен";

			setTimeout(() => {
				ModalResult.style.display = "none";
				ModalResult.textContent = "";
			}, 3000);
		});
});
