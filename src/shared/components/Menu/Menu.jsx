import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

export function Menu() {

  return(
    <nav className="c-menu">

      <Link className="c-menu__link" to="/">Home</Link>
      <Link className="c-menu__link" to="/jikan">Jikan</Link>
    </nav>
  );

}