import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import WelcomeWindowWithForm from "../WelcomeWindowWithForm/WelcomeWindowWithForm";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { registerUser } from "../../utils/auth";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

export default function Register({
  setIsProcessLoading, isInfoTooltipOpened, onInfoTooltip, isOpened,
  popupPackProps: { isProcessLoading, onClose, closePopupsOnOutsideClick } }) {

  const navigate = useNavigate();
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (isInfoTooltipOpened && isData) {
      setTimeout(() => {
        navigate('../sign-in', { replace: false });
        onClose(false);
      }, 1200);
    };

    return () => clearTimeout(setTimeout);
  }, [isInfoTooltipOpened, isData, navigate, onClose]);

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsProcessLoading(true);

    const { email, password } = values;
    registerUser(email, password)
      .then((res) => {
        setIsProcessLoading(false);
        resetForm();

        if (res) {
          setIsData(true);
          onInfoTooltip();
        };

        if (!res) {
          onInfoTooltip();
        };
      })
      .catch((err) => {
        console.log(`Ошибка в процессе регистрации пользователя на сайте: ${err}`);
      })
  };

  return (
    <>
      <WelcomeWindowWithForm
        heading={'Регистрация'}
        btnSubmit={'Зарегистрироваться'}
        btnAriaLabel={'Регистрация на сайте'}
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

        <p className="welcome-window__paragraph">Уже зарегистрированы?&nbsp;
          <Link className='welcome-window__link' to='../sign-in'>Войти</Link>
        </p>

      </WelcomeWindowWithForm>
      <InfoTooltip
        isData={isData}
        isOpened={isOpened}
        onClose={onClose}
        closePopupsOnOutsideClick={closePopupsOnOutsideClick}
      />
    </>
  );
};
