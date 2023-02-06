<h1 align="center">Учебный проект: "Место"</h1>

<div align="center">
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img src="https://user-images.githubusercontent.com/108838349/215305563-5d7a1891-fdbd-4142-b011-6ece3ec74cee.gif" width="550" alt="Гиф с демонстрацией функционала приложения">
  </a>
</div>

## Описание проекта
Данная проектная работа выполнена в рамках образовательной программы <a href="https://practicum.yandex.ru/">Яндекс Практикума</a>. Проект представляет собой <a href="">продолжение</a> портирования на "React" адаптивного приложения (SPA) с профилем пользователя и фотокарточками, <a href="https://github.com/elrouss/mesto">изначально написанного</a> на нативных технологиях: HTML5, CSS3 и JavaScript. В сравнении с предыдущей работой в данном проекте расширен функционал, добавляющий возможность регистрации и авторизации пользователей на сайте в своем личном кабинете

<h4>Ссылка на макет: https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1
<br>
Ссылка на проект: https://elrouss.github.io/react-mesto-auth/</h4>

<i>* - проект прошел код-ревью</i>

## Стек технологий
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Иконка React">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Иконка React Router">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка CSS3>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
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
<details>
  <summary>Адаптивный интерфейс <b><i>(в т. ч. новых компонентов и элементов)</i></b></summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216848219-0d443e1e-a711-4803-a78c-6c998a1786f9.gif" alt="Гиф с демонстрацией адаптивного интерфейса приложения">
  </a>
</details>

- Регистрация и авторизация пользователей

<details>
  <summary>Редактирование данных пользователя</summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216848508-481840e7-176a-466e-9a5f-f73f71c051e2.gif" alt="Гиф с демонстрацией редактирования данных пользователя в личном кабинете">
  </a>
</details>

<details>
  <summary>Обновление аватара</summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216848611-c9f96a5e-e87f-4755-8fe9-50592c0a62b1.gif" alt="Гиф с демонстрацией обновления аватара пользователя">
  </a>
</details>

<details>
  <summary>Добавление новой карточки</summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216848713-6efd8c14-089b-476f-b6f4-cbaa213beba3.gif" alt="Гиф с демонстрацией добавления новой карточки">
  </a>
</details>

<details>
  <summary>Добавление и снятие лайка (включая счетчик лайков)</summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216848788-786b5957-8e4b-4a1e-9b9a-be82d7475c73.gif" alt="Гиф с демонстрацией добавления и снятия лайка (включая счетчик лайков)">
  </a>
</details>

<details>
  <summary>Удаление карточки <b><i>с модальным окном подтверждения действия</i></b></summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216848877-b47233a0-0bde-4311-a266-326809dc6941.gif" alt="Гиф с демонстрацией удаления карточки">
  </a>
</details>


- Модальное окно успешной/неудачной регистрации на сайте
- Модальное окно с увеличенной фотографией карточки
- Открытие и закрытие модальных окон (по кнопке, <b><i>оверлею</i></b> и <b><i>клавише "Escape"</i></b>)
- <b><i>Спиннеры загрузки</i></b>
- <b><i>Валидация форм</i></b>
- <b><i>Окно предварительной загрузки страницы</i></b>
                                                                                               
<details><summary><b><i>Страница 404</i></b></summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/215304244-bd854ae2-0066-416d-a516-3b29f4028363.gif">
  </a>
</details>

<br>
<b><i>* - жирным курсивом выделен дополнительный функционал, не входящий в обязательный перечень требований для получения зачета по проектной работе</i></b>



## Планы по улучшению
- Оптимизация лишних ререндеров
- Вывод в модальном окне после неудачной попытки регистрации/авторизации текста ошибок ("Пользователь с таким электронным адресом уже зарегистрирован", "Неправильный электронный адрес/пароль" и проч.)
- Добавление автоматического обновления галереи карточек
- Добавление функции сабмита форм нажатием на клавишу "Enter" (в настоящий момент работает только в случае клика пользоватем по полю формы)
