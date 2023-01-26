import { Link } from "react-router-dom";
import WelcomeWindowWithForm from "../WelcomeWindowWithForm/WelcomeWindowWithForm";

export default function Register() {
  return (
    <WelcomeWindowWithForm
      heading={'Регистрация'}
      btnSubmit={'Зарегистрироваться'}
      btnAriaLabel={'Регистрация на сайте'}
    >

      <input
        className="welcome-window__input"
        name="userEmail"
        type="email"
        placeholder="Email"
        autoComplete="on"
        required
      />
      <input
        className="welcome-window__input"
        name="userPassword"
        type="password"
        autoComplete="current-password"
        placeholder="Пароль"
        required
      />
      <p className="welcome-window__paragraph">Уже зарегистрированы?&nbsp;
        <Link className='welcome-window__link' to='../sign-in'>Войти</Link>
      </p>

    </WelcomeWindowWithForm>
  );
};
