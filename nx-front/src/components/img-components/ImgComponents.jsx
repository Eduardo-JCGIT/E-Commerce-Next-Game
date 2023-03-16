import React from "react";

function ImgHeader (){

    return(
        <div>
            <div>
            <section className="header-index">
            <img
            src={require(`../../img/header/index/Juegos.jpg`)}
            alt='img-header' /> 
                            
                        <img
            src={require(`../../img/header/index/Consolas.jpg`)}
            alt='img-header' /> 
                        <img
            src={require(`../../img/header/index/Micropagos.jpg`)}
            alt='img-header' />
                        <img
            src={require(`../../img/header/index/Complementos.jpg`)}
            alt='img-header' />
            </section>
            </div>
        </div>
    )
}

export default ImgHeader