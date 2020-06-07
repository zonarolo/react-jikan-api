import React from 'react';
import './Footer.scss';


export function Footer(){

  return(
    <footer className="c-footer">
      <div className="c-footer__img-square">
        <div className="c-footer__img"><img src="https://la-space.sfo2.cdn.digitaloceanspaces.com/main-site/logo_transparente.png" alt=""
                className="b-img-primary"/></div>
        <div className="c-footer__square-content">
          <div className="c-footer__square"><a href="http://www.youtube.com" className="c-footer__link"><i className="fab fa-youtube c-footer__i fa-2x"></i></a></div>
          <div className="c-footer__square"><a href="http://www.instagram.com" className="c-footer__link"><i className="fab fa-instagram c-footer__i fa-2x"></i></a></div>
          <div className="c-footer__square"><a href="http://github.com" className="c-footer__link"><i className="fab fa-github c-footer__i fa-2x"></i></a></div>
          <div className="c-footer__square"><a href="http://twitter.com" className="c-footer__link"><i className="fab fa-twitter c-footer__i fa-2x"></i></a></div>
        </div>
      </div>
      <p className="c-footer__copy">2020 &copy;. Todos los derechos reservados</p>
    </footer>
  );
}