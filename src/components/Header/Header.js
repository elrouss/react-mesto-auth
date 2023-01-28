import { Outlet, Link, useMatch, useNavigate } from 'react-router-dom';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import logo from '../../images/header__logo_theme_light.svg';

export default function Header({ userData, setIsLoggedIn, isActive, onActive }) {
  // TODO: Исправить баг, когда исчезают элементы при наличии/отсутствии косой черты в конце url (regExp?)
  // TODO: ошибка в процессе выхода пользователя из кабинета на мобильном устройстве: остается отрицательный margin (исчезает только при перезагрузке страницы)
  const windowWidth = useWindowDimensions();

  const href = useMatch({ path: `${window.location.pathname}`, end: false });
  const isRootHref = href.pathname.endsWith('/react-mesto-auth');
  const isLoginHref = href.pathname.endsWith('/sign-in');

  const navigate = useNavigate();

  const burgerMenu = Array(3).fill(<span className="header__burger-line" />);

  function isDisplayMobileAndRootHref() {
    return windowWidth <= 696 && isRootHref;
  };

  function signUserOut() {
    localStorage.removeItem('jwt');
    navigate('./sign-in', { replace: true });
    setIsLoggedIn(false);
  };

  function renderHeaderMenu() {
    return (
      <div className={`header__data ${isDisplayMobileAndRootHref() && 'header__data_display_mobile'}`}>
        {
          isRootHref
            ? <>
              <p className='header__email'>{userData.email}</p>
              <button
                className='header__btn'
                type='button'
                aria-label='Выход из личного кабинета'
                onClick={signUserOut}
              >
                Выйти
              </button>
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
            aria-label="Открытие меню с электронным адресом пользователя и кнопкой выхода из личного кабинета"
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
