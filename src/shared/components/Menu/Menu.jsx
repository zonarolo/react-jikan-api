import React, {useContext} from "react";
import './Menu.scss';
import { Link } from 'react-router-dom';
import {ThemeContext} from "../../contexts/Theme/ThemeContext";


export function Menu() {

  const [theme, setTheme] = useContext(ThemeContext);
  const switchMode = ()=> theme === "Dark Mode" ? setTheme("Light Mode") : setTheme("Dark Mode");

  return(

    <nav className="c-menu">
      <img src="https://la-space.sfo2.cdn.digitaloceanspaces.com/main-site/logo_transparente.png" alt="" className="b-img-primary"/>

      <Link className="c-menu__link" to="/">Home</Link>
      <Link className="c-menu__link" to="/animes">Animes</Link>
      <Link className="c-menu__link" to="/newsletter">Newsletter</Link>
      <Link className="c-menu__link" onClick={ () => switchMode()}>
        {theme === "Dark Mode" ? "Light Mode" : "Dark Mode"}
      </Link>
    </nav>
  );

}