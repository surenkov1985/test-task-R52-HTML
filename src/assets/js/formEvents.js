"use strict";

const EmailInput = document.querySelector(".input-email"),
	PhoneInput = document.querySelector(".input-phone"),
	AgeInput = document.querySelector(".input-age"),
	GenderInput = document.querySelectorAll(".input-gender"),
	Form = document.querySelector(".modal__form"),
	AgeBlock = document.querySelector(".age"),
	SubmitButton = document.querySelector(".modal__submit"),
	IncButton = document.querySelector(".inc"),
	DecButton = document.querySelector(".dec"),
	Modal = document.querySelector(".modal");

///////////  Список событий формы модального окна   ///////////

const inputEvents = ["input", "keydown", "blur", "change", "submit"];

/////////////   Функция валидации полей формы   /////////////

function testValue(elem, reg, errString, errElem, next) {
	let str = elem.value;

	let test = reg.test(str);

	if (!str.length) {
		errElem.textContent = "Поле не должно быть пустым";
		elem.style.color = "#ff0000";
		elem.style.background = "rgba(255, 0, 0, 0.2)";
		elem.style.borderColor = "#ff0000";
	} else if (test) {
		next.focus();
	} else {
		errElem.textContent = errString;
		elem.style.color = "#ff0000";
		elem.style.background = "rgba(255, 0, 0, 0.2)";
		elem.style.borderColor = "#ff0000";
	}
}

function testSubmitValue(elem) {
	let name = elem.name;
	let errElem = document.querySelector(`.${name}-err`);

	errElem.textContent = "Поле не должно быть пустым";
	elem.style.color = "#ff0000";
	elem.style.background = "rgba(255, 0, 0, 0.2)";
	elem.style.borderColor = "#ff0000";
}

/////////////   обработчики событий полей формы   ////////////

inputEvents.forEach((event) => {
	EmailInput.addEventListener(event, function (e) {
		const errElem = document.querySelector(".email-err");
		let key = e.key;
		let eventType = e.type;
		let regexp =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let testString = "Введите валидный email";

		errElem.textContent = "";
		EmailInput.style.color = "#000000";
		EmailInput.style.background = "#ffffff";
		EmailInput.style.borderColor = "#000000";

		////////////   Валидация email при потере фокуса, отправке формы, нажатии Enter(перевод фокуса на следующий инпут при нажатии Enter и успешной проверке)   /////////////

		if (key === "Enter" || eventType === "submit") {
			e.preventDefault();

			testValue(EmailInput, regexp, testString, errElem, PhoneInput);
		}
	});

	PhoneInput.addEventListener(event, function (e) {
		const errElem = document.querySelector(".phone-err");
		let key = e.key;
		let eventType = e.type;
		let regexp = /^((7|8|\+7)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{5,15}$/;
		let testString = "Введите валидный номер";

		errElem.textContent = "";
		PhoneInput.style.color = "#000000";
		PhoneInput.style.background = "#ffffff";
		PhoneInput.style.borderColor = "#000000";

		////////////   Валидация phone при потере фокуса, отправке формы, нажатии Enter(перевод фокуса на первый чекбокс при нажатии Enter и успешной проверке)   /////////////

		if (key === "Enter" || eventType === "submit") {
			e.preventDefault();

			testValue(PhoneInput, regexp, testString, errElem, GenderInput[0]);
		}
	});
	for (let elem of GenderInput) {
		elem.addEventListener("change", function (e) {
			if (elem.value === "М") {
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
	}

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

		if (key === "Enter" || eventType === "submit") {
			e.preventDefault();

			//////////////   Валидация поля возраст, автоисправление при вводе некорректных значений и вывод ошибки при некорректном значении   /////////////
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

////////////   Увеличение/уменьшение возраста при нажатии стрелок   ////////////

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

///////////   Отправка формы   //////////

Form.addEventListener("submit", function (e) {
	e.preventDefault();

	const ModalResult = document.querySelector(".modal__result");
	const email = Form.querySelector("[name='email']");
	const phone = Form.querySelector("[name='phone']");
	const gender = Form.querySelector("[name='gender']:checked");
	const age = Form.querySelector("[name='age']");
	const url = document.location.search.replace("?", "").split("&");

	if (!email.value) {
		testSubmitValue(email);
	}
	if (!phone.value) {
		testSubmitValue(phone);
	}
	if (!gender) {
		Form.querySelector(".gender-err").textContent = "Не выбран пол";
	} else {
		Form.querySelector(".gender-err").textContent = "";
	}

	if (email.value && phone.value && gender) {
		const formData = {
			email: email.value,
			phone: phone.value,
			gender: gender.value,
			age: age.value,
		};
		for (let item of url) {
			let key = item.split("=");
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
					for (let elem of GenderInput) {
						elem.checked = false;
					}
					age.value = 18;
					document.body.style.overflowY = "inherit";
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
	}
});
