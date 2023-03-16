import React from "react"
import Nav from "../sem/Nav"
import Footer from "../sem/Footer"
import ImgHeader from "../img-components/ImgComponents"

function Index () {
    return(
        <div>
            <Nav/>
            <header>
            <ImgHeader/>
            </header>
            <main className="body-marg">
    <section>
      <h1>Descubre nuestra variedad de productos</h1>

      <div className="cards">
        <div className="card1">
        <img src={require(`../../img/principal/secciones/FORZA5.jpg`)}  alt="" />
          <div className="descrip">
            <h2>Descubre nuevos horizontes en México</h2>
            <br />
            <p>Disponible en físico y digital.</p>
            <p>Xbox Series S|X.</p>
            <br />
            <h3>Descubre más +</h3>
          </div>
        </div>
        <div className="card1">
          <img src={require(`../../img/principal/secciones/XboxSeriesX.jpg`)} alt="" />
          <div className="descrip">
            <h2>Alimenta tus sueños</h2>
            <h2>Xbox Series X</h2>
            <br />
            <p>Disponible ahora.</p>
            <br />
            <h3>Descubre más +</h3>
          </div>
        </div>
      </div>

      <div className="card2-bk">
        <div className="img-genshin-pc">
        <img src={require(`../../img/principal/destacado/3GenshinPC.jpg`)} alt="Genshin" />
        </div>
        <div className="img-genshin-mobile">
          <img src={require(`../../img/principal/destacado/3GenshinMobile.jpg`)} alt="" />
        </div>
        <h2>FARUZÁN: LEGADO DE LA SABIDURÍA</h2>
        <p>
          Obtén gratis 700 protogemas y 20000 moras al adquirir cualquier
          producto en nuestra tienda.
        </p>
      </div>
      <div className="cards">
        <div className="card2">
          <img src={require(`../../img/principal/secciones/PS5.jpg`)} alt="" />
          <div className="descrip">
            <h2>Jugar no tiene límites</h2>
            <br />
            <p>
              Estrena una consola de nueva generacion, ahorra un 10% al comprar
              en nuestra tienda.
            </p>
            <br />
            <h3>Cómpralo ahora +</h3>
          </div>
        </div>
        <div className="card2">
          <img src={require(`../../img/principal/secciones/Stray.jpg`)} alt="" />
          <div className="descrip">
            <h2>Call of Duty®: Modern Warfare® II</h2>
            <br />
            <p>El equipo 141 esta de regreso.</p>
            <p>Disponible dos tipos de ediciones.</p>
            <br />
            <h3>Descubre más +</h3>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <img
            src={require(`../../img/principal/secciones/HaloInfiniteS2.jpg`)}
            alt=""
          />
          <div className="descrip">
            <h2>Multijugador disponible</h2>
            <br />
            <p>Juega ahora con game pass con solo $10.</p>
            <p>Xbox Series S|X.</p>
            <br />
            <h3>Descubre más +</h3>
          </div>
        </div>
        <div className="card1">
          <img src={require(`../../img/principal/secciones/NFSHP.jpg`)} alt="" />
          <div className="descrip">
            <h2>Siento la necesidad, la necesidad de velocidad</h2>
            <br />
            <p>
              Disponible en game pass o adquierela en descuento en nuestra
              tienda.
            </p>
            <br />
            <h3>Descubre más +</h3>
          </div>
        </div>
      </div>
      <div className="card2-bk">
        <div className="img-fortnite-pc">
          <img src={require(`../../img/principal/destacado/5FortnitePC.jpg`)} alt="" />
        </div>
        <div className="img-fortnite-mobile">
          <img src={require(`../../img/principal/destacado/5FortniteMobile.jpg`)}  alt="" />
        </div>
        <div className="img-bk-plasm">
          <img
            src={require(`../../img/principal/destacado/LogoFortnite.png`)} 
            alt=""
          />
        </div>
        <div className="text-bk-ft">
          <h3>
            AVENTÚRATE EN EL CAPÍTULO 4 - TEMPORADA 1 DE BATTLE ROYALE DE
            FORTNITE
          </h3>
        </div>
      </div>
      <div className="card2-bk">
        <div className="img-mw-pc">
          <img src={require(`../../img/principal/destacado/4MWII-BK-PC.jpg`)}  alt="" />
        </div>
        <div className="img-mw-mobile">
          <img src={require(`../../img/principal/destacado/4MWII-BK-Mobile.jpg`)}  alt="" />
        </div>
        <div className="text-bk-ft2">
          <h3>TE DAMOS LA BIENVENIDA A LA NUEVA ERA DE CALL OF DUTY</h3>
          <br />
          <div className="text-bk-ft3">
            <p>
              Desde tácticas de infiltración a pequeña escala y de alto riesgo
              hasta misiones altamente clasificadas, los jugadores se
              desplegarán con la Fuerza operativa 141 en una campaña trotamundos
              de un solo jugador.
            </p>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card2">
          <img
            src={require(`../../img/principal/secciones/GenshinEvento.jpg`)}
            alt=""
          />
          <div className="descrip">
            <h2>Participa en eventos y gana puntos en tienda</h2>
            <br />
            <p>
              Participa en eventos vigentes en Genshin Impact y canjea tus
              puntos de Next Game
            </p>
            <br />
            <h3>Cómpralo ahora +</h3>
          </div>
        </div>
        <div className="card2">
          <img src={require(`../../img/principal/secciones/NintendoSwitch.jpg`)} alt="" />
          <div className="descrip">
            <h2>No hay juego como este</h2>
            <br />
            <p>Esta navidad disfruta una Nintendo Switch.</p>
            <br />
            <h3>Descubre más +</h3>
          </div>
        </div>
      </div>
    </section>
            </main>

    <div>
      <Footer/>
    </div>
        </div>
    )
}


export default Index