# Тестовое задание на вакансию HTML-верстальщик в компанию R52.ru

[Демо](https://mich-man.ru/projects/test-R52/index.html)

### Что нужно было сделать:

- Верстка страницы по описанию:
  - header высотой 100px, ширина во весь экран, цвет фона #eee
  - footer высотой 200px, ширина во весь экран, цвет фона #eee
  - контентная часть шириной 1200px
  - слева меню 10 пунктов по 80px высотой( при ширине < 980px убирается, в header добавляется кнопка меню)
  - справа 2 абзаца lorem ipsum
  - в footer кнопка открытия модального окна
  - при нажатии кнопки меню контентная часть затемняется и слева выдвигается меню, закрывается нажатием по затемненной части
  - при нажатии кнопки в footer контентная часть затемняется, открывается модальное окно, закрывается нажатием на затемненную часть
  - в модальном окне форма с полями: email, телефон, пол, если пол мужской добавляется поле возраст(от 18 до 65 лет)
  - при заполнении всех полей и нажатии отправить, данные из формы и query параметры адресной строки отправляются на любой url с помощью ajax, при успешной отправке данных в модальном окне выводится "Успешно отправлено” и через 3 секунды закрывается модальное окно.

### Выполнение

- В процессе выполнения использовались:
 - Webpack5
 - Javascript
 - Scss, flex
 - Fetch, полифил watwg-fetch (для работы в ie11)
- URL для отправки данных "https://jsonplaceholder.typicode.com/users"

Валидация полей формы при нажатии Enter и проверка заполненности полей при отправке формы
