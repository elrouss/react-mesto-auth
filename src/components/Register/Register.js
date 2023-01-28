import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import WelcomeWindowWithForm from "../WelcomeWindowWithForm/WelcomeWindowWithForm";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { registerUser } from "../../utils/auth";

export default function Register({
  setIsProcessLoading, isInfoTooltipOpened, onInfoTooltip, isOpened,
  popupPackProps: { isProcessLoading, onClose, closePopupsOnOutsideClick }}) {
    
  const navigate = useNavigate();
  const [isData, setIsData] = useState(false);

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

    const { email, password } = formValue;
    registerUser(email, password)
      .then((res) => {
        setIsProcessLoading(false);

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
      <InfoTooltip
        isData={isData}
        isOpened={isOpened}
        onClose={onClose}
        closePopupsOnOutsideClick={closePopupsOnOutsideClick}
      />
    </>
  );
};
