import logo from '../../images/header__logo_theme_light.svg';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип сайта &laquo;Mesto&raquo;" className="header__logo" />
    </header>
  );
}
