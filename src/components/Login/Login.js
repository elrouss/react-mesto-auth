import WelcomeWindowWithForm from "../WelcomeWindowWithForm/WelcomeWindowWithForm";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Login({ onAuthorization, isProcessLoading }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, password } = values;
    if (!email || !password) return;

    onAuthorization({
      email: email.trim().replace(/\s+/g, ' '),
      password: password
    });
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
          className={`welcome-window__input ${errors?.email && 'welcome-window__input_error'}`}
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="on"
          required
          onChange={handleChange}
          value={values?.email || ''}
        />
        <span className="welcome-window__error-msg">
          {errors?.email && 'Введите адрес электронной почты'}
        </span>
      </div>

      <div className="welcome-window__input-wrapper">
        <input
          className={`welcome-window__input ${errors?.password && 'welcome-window__input_error'}`}
          name="password"
          type="password"
          minLength="6"
          autoComplete="current-password"
          placeholder="Пароль"
          required
          onChange={handleChange}
          value={values?.password || ''}
        />
        <span className="welcome-window__error-msg">
          {errors?.password && 'Пароль должен состоять минимум из 6 симв.'}
        </span>
      </div>

    </WelcomeWindowWithForm>
  );
};
