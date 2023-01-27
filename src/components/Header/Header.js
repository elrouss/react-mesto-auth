import { Outlet, useMatch, Link } from 'react-router-dom';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import logo from '../../images/header__logo_theme_light.svg';

export default function Header({ userData, isActive, onActive }) {
  // TODO: Исправить баг, когда исчезают элементы при наличии/отсутствии косой черты в конце url (regExp?)
  const windowWidth = useWindowDimensions();

  const href = useMatch({ path: `${window.location.pathname}`, end: false });
  const isRootHref = href.pathname.endsWith('/react-mesto-auth');
  const isLoginHref = href.pathname.endsWith('/sign-in');

  const burgerMenu = Array(3).fill(<span className="header__burger-line" />);

  function isDisplayMobileAndRootHref() {
    return windowWidth <= 696 && isRootHref;
  };

  function renderHeaderMenu() {
    return (
      <div className={`header__data ${isDisplayMobileAndRootHref() && 'header__data_display_mobile'}`}>
        {
          isRootHref
            ? <>
              <p className='header__email'>{userData.email}</p>
              <button className='header__btn'>Выйти</button>
            </>
            : <Link
              className='header__btn'
              to={isLoginHref ? './sign-up' : './sign-in'}
            >
              {isLoginHref ? 'Регистрация' : 'Войти'}
            </Link>
        }
      </div>
    );
  };

  return (
    <>
      {isDisplayMobileAndRootHref() && renderHeaderMenu()}
      <header className="header">
        <img src={logo} alt="Логотип сайта &laquo;Mesto&raquo;" className="header__logo" />
        {
          isRootHref &&
          <button
            className={`header__burger ${isActive && 'active'}`}
            type="button"
            aria-label="Открытие меню с электронным адресом пользователя и кнопкой выхода с сайта"
            onClick={onActive}
          >
            {burgerMenu}
          </button>
        }
        {!isDisplayMobileAndRootHref() && renderHeaderMenu()}
      </header>
      <Outlet />
    </>
  );
};
