<h1 align="center">Учебный проект: "Место"</h1>

<div align="center">
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img src="https://user-images.githubusercontent.com/108838349/215305563-5d7a1891-fdbd-4142-b011-6ece3ec74cee.gif" width="550">
  </a>
</div>

## Описание проекта
Данная проектная работа составлена в рамках образовательной программы <a href="https://practicum.yandex.ru/">Яндекс Практикума</a>. Проект представляет собой <a href="">продолжение</a> портирования на "React" адаптивного приложения (SPA) с профилем пользователя и фотокарточками, <a href="https://github.com/elrouss/mesto">изначально написанного</a> на нативных технологиях: HTML5, CSS3 и JavaScript. В сравнении с предыдущей работой в данном проекте расширен функционал, добавляющий возможность регистрации и авторизации пользователей на сайте в своем личном кабинете

<h4>Ссылка на макет: https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1
<br>
Ссылка на проект: https://elrouss.github.io/react-mesto-auth/</h4>

## Стек технологий
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
</span>

## Установка, запуск приложения и эксплуатация
1. `https://github.com/elrouss/react-mesto-auth.git` - клонировать репозиторий
2. `npm i` - установить зависимости
3. `npm start` - запустить приложение в режиме разработчика (ввести ссылку [http://localhost:3000](http://localhost:3000) и загрузить приложение в браузере)
4. Для входа в личный кабинет приложения пользователю требуется <b>зарегистрироваться</b> (`https://elrouss.github.io/react-mesto-auth/sign-up`) и пройти <b>авторизацию</b> (`https://elrouss.github.io/react-mesto-auth/sign-in`). Можно воспользоваться уже зарегистрированным аккаунтом: <b>email</b> - `test-acc@test.ru`, <b>пароль</b> - `test-acc@test.ru`
5. При авторизации в локальном хранилище сохраняется токен пользователя, который при закрытии вкладки с приложением и возвращении позволяет оставаться авторизованным на сайте. Он удаляется после нажатия на кнопку выхода из личного кабинета
<p>
  <b>NB!</b> В связи <a href="https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing">с особенностями совместимости</a> Github Pages с модулем маршрутизации (React Router DOM) в удаленном репозитории <b>не рекомендуется</b> обновление страниц приложения, имеющих добавочные эндпоинты к корневой ссылке `/react-mesto-auth`)
</p>

## Методология, процесс создания, проблемы и их решение
Работа выполнена в <b>1 этап</b>:
<br>
Верстка дополнительных компонентов (стартовых окон с формами регистрации и авторизации пользователей) и элементов (гамбургер-меню, кнопка выхода из личного кабинета), написание функционала (с применением функциональной парадигмы программирования)
<br>
<br>
<b>Задачи и проблемы:</b>
1. Определение компонентов, общих для нескольких страниц и перерисовка элементов
<b>Решение:</b>выделено<b>2</b> компонента - <b><a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/Header/Header.js">Header</a></b> и <b><a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/WelcomeWindowWithForm/WelcomeWindowWithForm.js">WelcomeWindowWithForm</a></b>. В первом из них для перерисовки элемента (ссылки на страницу авторизации/регистрации, кнопки выхода из личного кабинета, бургерного меню) написаны функции, которые отслеживают <b>endpoint</b> открытого у пользователя url, а также <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/hooks/useWindowDimensions.js">разрешение экрана</a>. Второй компонент сделан по типу <b><a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/PopupWithForm/PopupWithForm.js">PopupWithForm</a></b>, в который в свою очередь вставляются <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/Register/Register.js">Register</a> и <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/Login/Login.js">Login</a>. Такое решение упростило написание логики валидации форм

2. Написать кастомный хук для валидации форм

<br>

<br>
<b>Решение:</b>в <a href="https://github.com/elrouss/mesto-react">предыдущем</a> проекте была написана валидация форм, 

## Функционал
- Адаптивный интерфейс <b><i>(в т. ч. новых компонентов и элементов)</i></b>
- Обмен данными с сервером
- Регистрация и авторизация пользователей
- Редактирование информации пользователя
- Обновление аватара
- Добавление новой карточки
- Добавление и снятие лайка (включая счетчик лайков)
- Удаление карточки <b><i>с модальным окном подтверждения действия</i></b>
- Модальное окно успешной/неудачной регистрации на сайте
- Модальное окно с увеличенной фотографией карточки
- Открытие и закрытие модальных окон (по кнопке, <b><i>оверлею</i></b> и <b><i>клавише "Escape"</i></b>)
- <b><i>Спиннеры загрузки</i></b>
- <b><i>Валидация форм</i></b>
- <b><i>Окно предварительной загрузки страницы</i></b>
- <b><i>Страница 404</i></b> (<b>не будет видна</b> на gh pages в связи <a href="https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing">с особенностями совместимости</a> gh с модулем маршрутизации (React Router DOM), по той же причине в удаленном репозитории <b>не рекомендуется</b> обновление страниц приложения, имеющих добавочные эндпоинты к корневой ссылке `/react-mesto-auth`)
<br>
<b><i>* - жирным курсивом выделен дополнительный функционал, не входящий в обязательный перечень требований для получения зачета по проектной работе</i></b>



## Планы по доработке
- вывод в модальном окне после неудачной попытки регистрации/авторизации текста ошибок ("Пользователь с таким электронным адресом уже зарегистрирован", "Неправильный электронный адрес/пароль" и проч.)
- добавление автоматического обновления галереи карточек
- добавление функции сабмита форм нажатием на клавишу "Enter" (в настоящий момент работает только в случае клика пользоватем по полю формы)


<div align="center">
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="600" src="https://user-images.githubusercontent.com/108838349/215304244-bd854ae2-0066-416d-a516-3b29f4028363.gif">
  </a>
</div>



### Данные для входа (email и password): test-acc@test.ru
<i>* - проект прошел обязательное код-ревью</i>
