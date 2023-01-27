import { useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeWindowWithForm from "../WelcomeWindowWithForm/WelcomeWindowWithForm";
import { authorizeUser } from "../../utils/auth";

export default function Login({ handleLogin }) {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, password } = formValue;

    if (!email || !password) return;
    authorizeUser(email, password)
      .then((jwt) => {
        if (jwt) {
          setFormValue({ username: '', password: '' });
          handleLogin();
          navigate('../', { replace: true });
        };
      })
      .catch((err) => {
        console.log(`Ошибка в процессе авторизации пользователя на сайте: ${err}`);
      });
  };

  return (
    <WelcomeWindowWithForm
      heading={'Вход'}
      btnSubmit={'Войти'}
      btnAriaLabel={'Авторизация на сайте'}
      onSubmit={handleSubmit}
    >

      <input
        className="welcome-window__input"
        name="email"
        type="email"
        placeholder="Email"
        autoComplete="on"
        // required
        onChange={handleChange}
      />
      <input
        className="welcome-window__input"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="Пароль"
        // required
        onChange={handleChange}
      />

    </WelcomeWindowWithForm>
  );
};
