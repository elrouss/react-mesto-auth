import { Outlet } from 'react-router-dom';
import logo from '../../images/header__logo_theme_light.svg';

export default function Header() {
  // TODO: Скорее всего, потребуется разделить действия у трех кнопок в шапке
  const href = window.location.href;

  function renderBtnText() {
    if (href.endsWith('/sign-up')) {
      return (
        'Регистрация'
      );
    };

    if (href.endsWith('/sign-in')) {
      return (
        'Войти'
      );
    };

    if (href.endsWith('http://localhost:3000/')) {
      return (
        'Выйти'
      );
    }
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="Логотип сайта &laquo;Mesto&raquo;" className="header__logo" />
        <div className='header__data'>
          {href.endsWith('http://localhost:3000/') && <p className='header__email'>email@mail.com</p>}
          <button className='header__btn'>{renderBtnText()}</button>
        </div>
      </header>
      <Outlet />
    </>
  );
};
