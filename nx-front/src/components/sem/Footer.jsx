import React from "react";
import iconnx from "../../img/logo/Logo 2.png"

function Footer (){

    return(
    <div>

<footer>
      <div className="footer-option-nx">
        <div className="position-logo-footer">
          <img src={iconnx} alt="" className="icon-logo-nx" />
        </div>
        <ul>
          <li><a href="0">Soporte</a></li>
          <li><a href="0">Información legal</a></li>
          <li><a href="0">Política de coockies</a></li>
          <li><a href="0">Política de privacidad</a></li>
          <li><a href="0">Quejas y comentarios</a></li>
          <li><a href="0">Socios</a></li>
        </ul>
      </div>

      <div className="legal-text-footer">
        <p>
          © 2021-2022 Next Game, Inc. Next Game, Xbox, Hoyoverse, Playstation,
          Epic Games y Activision Blizzard son marcas pertenecen a sus
          respectivos titulares ya sea juegos, consolas y complementos de juegos
          siendo destribuido por Next Game.
        </p>
      </div>
    </footer>

    </div>
    )
}

export default Footer