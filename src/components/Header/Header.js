import { Outlet } from 'react-router-dom';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import logo from '../../images/header__logo_theme_light.svg';

export default function Header(props) {
  // TODO: Скорее всего, потребуется разделить действия у трех кнопок в шапке
  const { isActive, onActive } = props;

  const windowWidth = useWindowDimensions();
  const href = window.location.href;
  const rootHref = href.endsWith('http://localhost:3000/');

  const burgerLine = <span className="header__burger-line" />;

  function isDisplayMobileAndRootHref() {
    return windowWidth <= 696 && rootHref;
  };

  function renderHeaderMenu() {
    return (
      <div className={`header__data ${isDisplayMobileAndRootHref() && 'header__data_display_mobile'}`}>
        {rootHref && <p className='header__email'>email@mail.com</p>}
        <button className='header__btn'>{renderBtnText()}</button>
      </div>
    );
  };

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

    if (rootHref) {
      return (
        'Выйти'
      );
    };
  };

  return (
    <>
      {isDisplayMobileAndRootHref() && renderHeaderMenu()}
      <header className="header">
        <img src={logo} alt="Логотип сайта &laquo;Mesto&raquo;" className="header__logo" />
        {
          rootHref &&
          <button
            className={`header__burger ${isActive && 'active'}`}
            type="button"
            aria-label="Открытие меню с электронным адресом пользователя и кнопкой выхода с сайта"
            onClick={onActive}
          >
            {burgerLine}
            {burgerLine}
            {burgerLine}
          </button>
        }
        {!isDisplayMobileAndRootHref() && renderHeaderMenu()}
      </header>
      <Outlet />
    </>
  );
};
