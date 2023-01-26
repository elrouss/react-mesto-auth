import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import WelcomeWindowWithForm from "../WelcomeWindowWithForm/WelcomeWindowWithForm";
import { registerUser } from "../../utils/auth";

export default function Register() {
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
    registerUser(email, password)
      .then(() => {
        navigate('../sign-in', { replace: true });
      });
  };

  return (
    <WelcomeWindowWithForm
      heading={'Регистрация'}
      btnSubmit={'Зарегистрироваться'}
      btnAriaLabel={'Регистрация на сайте'}
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
      <p className="welcome-window__paragraph">Уже зарегистрированы?&nbsp;
        <Link className='welcome-window__link' to='../sign-in'>Войти</Link>
      </p>

    </WelcomeWindowWithForm>
  );
};
