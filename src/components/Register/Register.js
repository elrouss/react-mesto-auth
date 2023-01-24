import WelcomeWindowWithForm from "../WelcomeWindowWithForm/WelcomeWindowWithForm";

export default function Register() {
  return (
    <WelcomeWindowWithForm
      heading={'Регистрация'}
      btnSubmit={'Зарегистрироваться'}
    >
      <p className="welcome-window__paragraph">Уже зарегистрированы?&nbsp;
        <a className="welcome-window__link" href="http://localhost:3000/sign-up">Войти</a>
      </p>
    </WelcomeWindowWithForm>
  );
};
