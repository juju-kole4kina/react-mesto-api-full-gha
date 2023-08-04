import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header(props) {
  const location = useLocation();

  return(
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого Место" />
      <ul className='header__nav-bar'>
        {location.pathname === '/sign-up' && <li><Link to="sign-in" className="header__link">Войти</Link></li>}
        {location.pathname === '/sign-in' && <li><Link to="sign-up" className="header__link">Зарегистрироваться</Link></li>}
        {location.pathname === '/' && <li><span className="header__user-email">{props.userData}</span><Link to="sign-in" onClick={props.handleSignOut} className='header__link'>Выйти</Link></li>}
      </ul>

    </header>
  );
}

export default Header;
