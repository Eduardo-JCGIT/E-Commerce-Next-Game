import React from "react";
import iconnx from "../../img/logo/Logo 2.png"

function Nav (){


    return(
        <div>

<div class="nav-nx">
        <img src={iconnx} alt="" class="icon-logo-nx" />
        <nav>
          <div class="back-menu"></div>
          <ul>
            <li><a href="pag/Juegos.html">Juegos</a></li>
            <li><a href="q">Consolas</a></li>
            <li><a href="a">Complementos</a></li>
            <li><a href="pag/CreateAcount.html">Crear cuenta</a></li>
            <li><a href="a">Cerrar Sesión</a></li>
          </ul>
        </nav>
      </div>
      <div class="back-menu-mobile-color">
        <img src="img/Logo/Logo 2.png" alt="" />
      </div>

      <div class="bar-menu">
        <span class="line1-bar-menu"></span>
        <span class="line2-bar-menu"></span>
        <span class="line3-bar-menu"></span>
      </div>

        </div>
    )
}


export default Nav