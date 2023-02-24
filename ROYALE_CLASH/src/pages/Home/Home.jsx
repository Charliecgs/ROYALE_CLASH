import './Home.css';

import React from 'react';

const Home = () => {
  return (
    <main className="main-home">
      <div className="container">
        <div className="red">
          <div className="description">
            <h1 className="borderWhite">CREA TU PROPIO MAZO</h1>
            <p className="borderWhite">
              DESCUBRE NUESTRA PAGINA Y ENSEÑA A TUS AMIGOS LOS MEJORES MAZOS CREADOS Y
              PARA CREAR
            </p>
            <button className="buttonMazo">Pulsa para crear mazo</button>
          </div>

          <div className="tutorial">
            <div className="tutorial1">
              <img
                src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677246882/ClashRoyale/Mazos_czajbv.jpg"
                alt="tutorial 1"
              />
              <p className="borderWhite">
                Paso 1: Pulsar crear mazo para ir a creaciones
              </p>
            </div>
            <div className="tutorial1">
              <img
                src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677246882/ClashRoyale/Mazos_czajbv.jpg"
                alt="tutorial 1"
              />
              <p className="borderWhite">
                Paso 2: Seleccionar las cartas que quieras para tu mazo
              </p>
            </div>
            <div className="tutorial1">
              <img
                src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677246882/ClashRoyale/Mazos_czajbv.jpg"
                alt="tutorial 1"
              />
              <p className="borderWhite">
                Paso 3: Guardar y seguir creando mazos para competir{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="blue">
          <video
            src="../../../public/videos/video.mp4"
            type="video/mp4"
            autoPlay
            loop
            muted="muted"
            className="videoClash"
          >
            <track
              src="captions_es.vtt"
              kind="captions"
              srcLang="es"
              label="spanish_captions"
            ></track>
          </video>
          <img
            className="imgMovile"
            src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677246350/ClashRoyale/apple-iphone-se-medium_aqehdo.png"
            alt="TrailerMovile"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
