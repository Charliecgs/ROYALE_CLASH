import './Home.css';

import { useContext } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

const Home = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useContext(UserContext);
  return (
    <main className="main-home">
      <div className="container">
        <div className="red">
          <div className="description">
            <h1 className="borderWhite text-xl">¡CREA TU PROPIO MAZO DE CLASH ROYALE!</h1>
            <p className="borderWhite">
              ¡PUNTUA Y COMPARTE CON TUS AMIGOS LOS MEJORES MAZOS!
            </p>
            <button
              className="bn54"
              onClick={() => navigate('/deck')}
              style={
                localStorage.getItem('theme') == 'header-dark'
                  ? {
                      backgroundColor: '#dc563f',
                      border: 'solid red 3px',
                      color: 'white',
                    }
                  : {
                      backgroundColor: '#488bf4',
                      border: 'solid blue 3px',
                      color: 'white',
                    }
              }
            >
              <span className="bn54span">CREA TU MAZO</span>{' '}
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
