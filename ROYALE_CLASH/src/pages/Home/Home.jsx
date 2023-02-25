import './Home.css';

import React from 'react';

const Home = () => {
  return (
    <main className="main-home">
      <div className="container">
        <div className="red">
          <div className="description">
            <h1 className="borderWhite text-xl">¡CREA TU PROPIO MAZO DE CLASH ROYALE!</h1>
            <p className="borderWhite">
              ¡PUNTUA Y COMPARTE CON TUS AMIGOS LOS MEJORES MAZOS!
            </p>
            <button className="bg-indigo-500 border border-indigo-700 hover:bg-indigo-400 text-white font-bold py-3 px-6 border-b-4 border-blue-900 hover:border-indigo-500 rounded">
              {' '}
              CREA TU MAZO{' '}
            </button>
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
