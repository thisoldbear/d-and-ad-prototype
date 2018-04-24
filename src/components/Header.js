import React from 'react'
import { Link } from 'react-router-dom';

import './Header.css';

import logo from './../logo.svg';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="site-header">
    <img src={logo} className="site-header__logo" alt="logo" />
    <nav className="site-header__nav">
      <ul className="site-header__nav-list">
        <li className="site-header__nav-list-item"><Link className="site-header__nav-list-link" to='/'>Homepage</Link></li>
        <li className="site-header__nav-list-item"><Link className="site-header__nav-list-link" to='/case-study'>Case Study</Link></li>
        <li className="site-header__nav-list-item"><Link className="site-header__nav-list-link" to='/profile'>Profile</Link></li>
        <li className="site-header__nav-list-item"><Link className="site-header__nav-list-link" to='/nomination'>Nomination</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
