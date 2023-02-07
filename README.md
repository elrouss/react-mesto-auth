<h1 align="center">Учебный проект: "Место"</h1>

<div align="center">
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img src="https://user-images.githubusercontent.com/108838349/215305563-5d7a1891-fdbd-4142-b011-6ece3ec74cee.gif" width="550" alt="Гиф с демонстрацией функционала приложения">
  </a>
</div>

<details>
  <summary>Оглавление</summary>
  <ol>
    <li><a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%9E%D0%B3%D0%BB%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-,1.%20%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0,-%D0%94%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0">Описание проекта</a></li>
    <li><a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%B2%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE)-,2.%20%D0%A1%D1%82%D0%B5%D0%BA%20%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9,-(%D0%B2%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE">Стек технологий</a></li>
    <li><a href="https://github.com/elrouss/react-mesto-auth#:~:text=3.%20%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0%2C%20%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%20%D0%B8%20%D1%8D%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F">Установка, запуск и эксплуатация приложения</a></li>
    <li><a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%B2%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE)-,4.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F,-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B0%20%D0%B2">Процесс создания</a></li>
    <ul>
      <li><a href="https://github.com/elrouss/react-mesto-auth#:~:text=4.1%20%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8%2C%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B%20%D0%B8%20%D0%B8%D1%85%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5">Основные задачи, проблемы и их решение</a></li>
    </ul>
    <li><a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%B2%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE)-,5.%20%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB,-%D0%90%D0%B4%D0%B0%D0%BF%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81%20(%D0%B2">Функционал</a></li>
    <li><a href="https://github.com/elrouss/react-mesto-auth#:~:text=6.%20%D0%9F%D0%BB%D0%B0%D0%BD%D1%8B%20%D0%BF%D0%BE%20%D1%83%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%B8%D1%8E">Планы по улучшению</a></li>
  </ol>
</details>

## 1. Описание проекта
Данная проектная работа выполнена в рамках образовательной программы <a href="https://practicum.yandex.ru/">Яндекс Практикума</a>. Проект представляет собой <a href="">продолжение</a> портирования на "React" адаптивного приложения (SPA) с профилем пользователя и фотокарточками, <a href="https://github.com/elrouss/mesto">изначально написанного</a> на нативных технологиях: HTML5, CSS3 и JavaScript. В сравнении с предыдущей работой в данном проекте добавлен функционал регистрации и авторизации пользователей на сайте в своем личном кабинете, а также исправлены некоторые ошибки, пропущенные ревьюером

<h4>Ссылка на макет: https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1
<br>
Ссылка на проект: https://elrouss.github.io/react-mesto-auth/</h4>

<i>* - проект прошел код-ревью</i>

<div align="right">(<a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%3A%20%22%D0%9C%D0%B5%D1%81%D1%82%D0%BE%22-,%D0%9E%D0%B3%D0%BB%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5,-1.%20%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0">в начало</a>)</div>

## 2. Стек технологий
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Иконка React">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Иконка React Router">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
</span>

<div align="right">(<a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%3A%20%22%D0%9C%D0%B5%D1%81%D1%82%D0%BE%22-,%D0%9E%D0%B3%D0%BB%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5,-1.%20%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0">в начало</a>)</div>

## 3. Установка, запуск и эксплуатация приложения
1. `git clone https://github.com/elrouss/react-mesto-auth.git` - клонировать репозиторий (с использованием HTTPS) на свое устройство
2. `npm i` - установить зависимости
3. `npm run start` - запустить приложение в режиме разработчика (в браузере ввести ссылку `http://localhost:3000/react-mesto-auth/sign-in`, если приложение не открылось там автоматически)
4. При использовании приложения для входа в личный кабинет пользователю требуется <b>зарегистрироваться</b> (`https://elrouss.github.io/react-mesto-auth/sign-up`) и пройти <b>авторизацию</b> (`https://elrouss.github.io/react-mesto-auth/sign-in`). Можно воспользоваться уже зарегистрированным аккаунтом: <b>email</b> - `test-acc@test.ru`, <b>пароль</b> - `test-acc@test.ru`
5. При авторизации в локальном хранилище сохраняется токен пользователя, который при закрытии вкладки с приложением и возвращении позволяет оставаться авторизованным на сайте. Он удаляется после нажатия на кнопку выхода из личного кабинета
<p>
  <b>NB!</b> В связи <a href="https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing">с особенностями совместимости</a> Github Pages с модулем маршрутизации (React Router DOM) в удаленном репозитории <b>не рекомендуется</b> обновление страниц приложения, имеющих добавочные эндпоинты к корневой ссылке <b>/react-mesto-auth</b>
</p>
<p>
  <b>NB!!</b> На данном этапе не настроена отрисовка ошибок при попытке регистрации пользователя с ранее зарегистрированным электронным адресом, неправильном вводе электронного адреса и/или пароля и т.п. Эти ошибки можно проверить самостоятельно в <b>консоли разработчика</b> во вкладке <b>&laquo;Network&raquo;</b> (ответ с сервера будет выделен красным цветом)
</p>

<div align="right">(<a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%3A%20%22%D0%9C%D0%B5%D1%81%D1%82%D0%BE%22-,%D0%9E%D0%B3%D0%BB%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5,-1.%20%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0">в начало</a>)</div>

## 4. Процесс создания
Работа выполнена в <b>1 этап</b>:
<br>
Верстка дополнительных компонентов (стартовых окон с формами регистрации и авторизации пользователей) и элементов (гамбургер-меню, кнопка выхода из личного кабинета), написание функционала

<div align="right">(<a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%3A%20%22%D0%9C%D0%B5%D1%81%D1%82%D0%BE%22-,%D0%9E%D0%B3%D0%BB%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5,-1.%20%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0">в начало</a>)</div>

### 4.1 Основные задачи, проблемы и их решение
1. Вынос <b>общих компонентов</b> для нескольких страниц и перерисовка элементов
<p>
  <b>Решение: </b>выделено <b>2</b> компонента - <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/Header/Header.js">Header</a> и <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/WelcomeWindowWithForm/WelcomeWindowWithForm.js">WelcomeWindowWithForm</a>. В первом из них для перерисовки элемента (ссылки на страницу авторизации/регистрации, кнопки выхода из личного кабинета, гамбургер-меню) написаны функции, которые отслеживают <b>endpoint</b> открытого у пользователя <b>url</b>, а также <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/hooks/useWindowDimensions.js">разрешение экрана</a>. Второй компонент сделан по типу <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/PopupWithForm/PopupWithForm.js">PopupWithForm</a>, в который в свою очередь вставляются <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/Register/Register.js">Register</a> и <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/Login/Login.js">Login</a>
</p>

2. Проблема <b>отрисовки стартового окна</b> с формой авторизации на несколько миллисекунд при обновлении страницы в личном кабинете
<p>
  <b>Решение:</b> в компоненте App создан <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/App/App.js#:~:text=const%20%5BisAppLoading%2C%20setIsAppLoading%5D%20%3D%20useState(false)%3B">стейт-заглушка</a>, ставящийся на этапе загрузки приложения, когда происходит проверка наличия токена и переадресация пользователю по нужному роуту
</p>

3. Переписать код <b>валидаци</b>и форм под <b>кастомный хук</b>
<p>
  <b>Решение:</b> в <a href="https://github.com/elrouss/mesto-react">старом</a> проекте в компонентах <b>3</b> модальных окон (<a href="https://github.com/elrouss/mesto-react/blob/main/src/components/EditAvatarPopup/EditAvatarPopup.js">EditAvatarPopup</a>, <a href="https://github.com/elrouss/mesto-react/blob/main/src/components/EditProfilePopup/EditProfilePopup.js">EditProfilePopup</a>, <a href="https://github.com/elrouss/mesto-react/blob/main/src/components/AddPlacePopup/AddPlacePopup.js">AddPlacePopup</a>) была реализована собственноручно написанная валидация, которая получилась несколько громоздкой. С появлением <b>2</b> новых компонентов (<a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/Register/Register.js">Register</a> и <a href="a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/components/Login/Login.js">Login</a>) составлен <a href="https://github.com/elrouss/react-mesto-auth/blob/main/src/hooks/useFormWithValidation.js">хук</a>, примененный ко всем названным компонентам, который в итоге сделал код <b>более читаемым</b>, <b>сократил</b> его в <b>1,5 раза</b> и сделал функцию валидации <b>универсальной</b>. Кроме того, в верстке и стилях <a href="https://github.com/elrouss/react-mesto-auth/commit/41709b0c900fa8ab1bd0512bb1f78df7f08d2dcd#:~:text=%40%40%20%2D1%2C29%20%2B1%2C15%20%40%40-,.popup__error%20%7B,-.popup__error%20%7B">переписан</a> код отрисовки ошибок валидации (ранее - применялось абсолютное позиционирование, что некорректно отображало ошибки на мобильных разрешениях (с попаданием в фокус инпутов) и требовало высчитывание точек местоположения (top, left) для промежуточных разрешений
</p>

4. В <a href="https://github.com/elrouss/mesto-react">прошлой</a> версии проекта <b>при закрытии модального окна с фотографией карточки</b> резко исчезал снимок и появлялся <b>undefined</b>
<p>
  <b>Решение:</b> открытие и закрытие модального окна происходило только при наличии данных в передаваемом объекте (стейт <b>selectedCard</b>), появлявшихся и исчезавших во время клика по изображению карточки. Соответственно, закрытие окна начиналось только при очистке данных в объекте карточки (<b>Object.keys(card).length !== 0</b>, отсюда - <b>undefined</b>). В качестве <a href="https://github.com/elrouss/react-mesto-auth/commit/6cdc7d24817f96a12c206eeca30104d171b7040f">решения</a> этой проблемы был введен новый стейт <b>isImagePopupOpened</b> с булевым значением, который меняется при клике на карточку, что приводит к открытию и закрытию модального окна (объект карточки продолжает храниться в стейте <b>selectedCard</b>). Для очистки данных в модальном окне при закрытии во избежание "моргания" изображения при открытии модального окна другой карточки добавлен хук <b>useEffect</b> с методом <b>setTimeout</b>, который возвращает стейт <b>selectedCard</b> в исходное состояние сразу же после завершения анимации плавного закрытия модального окна
</p>

<div align="right">(<a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%3A%20%22%D0%9C%D0%B5%D1%81%D1%82%D0%BE%22-,%D0%9E%D0%B3%D0%BB%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5,-1.%20%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0">в начало</a>)</div>

## 5. Функционал
<details>
  <summary>Адаптивный интерфейс <b><i>(в т. ч. новых компонентов и элементов)</i></b></summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216848219-0d443e1e-a711-4803-a78c-6c998a1786f9.gif" alt="Гиф с демонстрацией адаптивного интерфейса приложения">
  </a>
</details>

<details>
  <summary>Регистрация и авторизация пользователей</summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216912837-de6a7d00-24fb-49b9-8e65-7982180eb2c5.gif" alt="Гиф с демонстрацией регистрации и авторизации пользователей">
  </a>
</details>

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

<details>
  <summary>Модальное окно успешной/неудачной регистрации на сайте</summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216910166-40745d73-2086-45ec-a348-306336499426.gif" alt="Гиф с демонстрацией модального окна успешной/неудачной регистрации на сайте">
  </a>
</details>

<details>
  <summary>Модальное окно с увеличенной фотографией карточки</summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216910652-a8a9272c-1e87-49e0-b983-93c3952b88e8.gif" alt="Гиф с демонстрацией модального окна с увеличенной фотографией карточки">
  </a>
</details>

<details>
  <summary>Открытие и закрытие модальных окон (по кнопке, <b><i>оверлею</i></b> и <b><i>клавише "Escape"</i></b>)</summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216910652-a8a9272c-1e87-49e0-b983-93c3952b88e8.gif" alt="Гиф с демонстрацией открытия и закрытия модального окна">
  </a>
</details>

<details>
  <summary><b><i>Спиннеры загрузки</i></b></summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216848611-c9f96a5e-e87f-4755-8fe9-50592c0a62b1.gif" alt="Гиф с демонстрацией спиннера загрузки на примере модального окна с обновлением аватара">
  </a>
</details>

<details>
  <summary><b><i>Валидация форм</i></b></summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216848611-c9f96a5e-e87f-4755-8fe9-50592c0a62b1.gif" alt="Гиф с демонстрацией валидации формы на примере модального окна с обновлением аватара">
  </a>
</details>

<details>
  <summary><b><i><b><i>Окно предварительной загрузки страницы</i></b></i></b></summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/216913189-b1a3c13c-1f28-4291-856e-a43fa92ce29f.gif" alt="Гиф с демонстрацией окна предварительной загрузки страницы">
  </a>
</details>
                                                                                               
<details><summary><b><i>Страница 404</i></b> (<a href="https://github.com/elrouss/react-mesto-auth#:~:text=NB!%20%D0%92%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%20%D1%81%20%D0%BE%D1%81%D0%BE%D0%B1%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8F%D0%BC%D0%B8%20%D1%81%D0%BE%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8%20Github%20Pages%20%D1%81%20%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B5%D0%BC%20%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8%20(React%20Router%20DOM)%20%D0%B2%20%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC%20%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BD%D0%B5%20%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D1%83%D0%B5%D1%82%D1%81%D1%8F%20%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%2C%20%D0%B8%D0%BC%D0%B5%D1%8E%D1%89%D0%B8%D1%85%20%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D1%8B%D0%B5%20%D1%8D%D0%BD%D0%B4%D0%BF%D0%BE%D0%B8%D0%BD%D1%82%D1%8B%20%D0%BA%20%D0%BA%D0%BE%D1%80%D0%BD%D0%B5%D0%B2%D0%BE%D0%B9%20%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B5%20/react%2Dmesto%2Dauth)"><b>не будет видна</b></a> на  Github Pages)</summary>
  <a href="https://elrouss.github.io/react-mesto-auth/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/215304244-bd854ae2-0066-416d-a516-3b29f4028363.gif">
  </a>
</details>

<br>
<b><i>* - жирным курсивом выделен дополнительный функционал, не входящий в обязательный перечень требований для получения зачета по проектной работе</i></b>

<div align="right">(<a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%3A%20%22%D0%9C%D0%B5%D1%81%D1%82%D0%BE%22-,%D0%9E%D0%B3%D0%BB%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5,-1.%20%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0">в начало</a>)</div>

## 6. Планы по улучшению
- Оптимизация лишних ререндеров
- Вывод в модальном окне после неудачной попытки регистрации/авторизации текста ошибок ("Пользователь с таким электронным адресом уже зарегистрирован", "Неправильный электронный адрес/пароль" и проч.)
- Исправление "заторможенности" анимации при открытии/закрытии бургерного меню на iPhone
- Оптимизация приложения для людей с ограниченными возможностями (напр., <b>label</b> для инпутов форм)
- Добавление автоматического обновления галереи карточек
- Добавление функции сабмита форм нажатием на клавишу "Enter" (в настоящий момент работает только в случае клика пользоватем по полю формы)

<div align="right">(<a href="https://github.com/elrouss/react-mesto-auth#:~:text=%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%3A%20%22%D0%9C%D0%B5%D1%81%D1%82%D0%BE%22-,%D0%9E%D0%B3%D0%BB%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5,-1.%20%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0">в начало</a>)</div>
