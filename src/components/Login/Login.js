import WelcomeWindowWithForm from "../WelcomeWindowWithForm/WelcomeWindowWithForm";

export default function Login() {
  return (
    <WelcomeWindowWithForm
      heading={'Вход'}
      btnSubmit={'Войти'}
      btnAriaLabel={'Авторизация на сайте'}
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

    </WelcomeWindowWithForm>
  );
};
