import { useNavigate } from "react-router-dom";

import WelcomeWindowWithForm from "../WelcomeWindowWithForm/WelcomeWindowWithForm";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { authorizeUser } from "../../utils/auth";

export default function Login({ handleLogin, isProcessLoading, setIsProcessLoading }) {
  const navigate = useNavigate();
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, password } = values;
    if (!email || !password) return;

    setIsProcessLoading(true);
    authorizeUser(email, password)
      .then((jwt) => {
        if (jwt) {
          resetForm();
          handleLogin();
          navigate('../', { replace: true });
        };
      })
      .catch((err) => {
        console.log(`Ошибка в процессе авторизации пользователя на сайте: ${err}`);
      })
      .finally(() => {
        setIsProcessLoading(false);
      })
  };

  return (
    <WelcomeWindowWithForm
      heading={'Вход'}
      btnSubmit={'Войти'}
      btnAriaLabel={'Авторизация на сайте'}
      onSubmit={handleSubmit}
      isProcessLoading={isProcessLoading}
      isValid={isValid}
    >
      <div className="welcome-window__input-wrapper">
        <input
          className="welcome-window__input"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="on"
          required
          onChange={handleChange}
        />
        <span className="welcome-window__error-msg">{errors?.email && 'Введите адрес электронной почты'}</span>
      </div>
      
      <div className="welcome-window__input-wrapper">
        <input
          className="welcome-window__input"
          name="password"
          type="password"
          minLength="6"
          autoComplete="current-password"
          placeholder="Пароль"
          required
          onChange={handleChange}
        />
        <span className="welcome-window__error-msg">{errors?.password && 'Пароль должен состоять минимум из 6 симв.'}</span>
      </div>

    </WelcomeWindowWithForm>
  );
};
