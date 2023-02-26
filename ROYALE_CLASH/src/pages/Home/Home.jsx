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
                src="https://res.cloudinary.com/dqkcdzt1m/image/upload/v1677426333/lava-loon-deck_d8j4m4.webp"
                alt="tutorial 1"
              />
              <p className="borderWhite">Paso 1: Elige el mazo que deseas editar</p>
            </div>
            <div className="tutorial1">
              <img
                src="https://res.cloudinary.com/dqkcdzt1m/image/upload/v1677427636/decklist_ae4dm0.jpg"
                alt="tutorial 1"
              />
              <p className="borderWhite">Paso 2: Selecciona las mejores cartas</p>
            </div>
            <div className="tutorial1">
              <img
                src="https://res.cloudinary.com/dqkcdzt1m/image/upload/v1677426332/the-best-clash-royale-deck_uq55ow.webp"
                alt="tutorial 1"
              />
              <p className="borderWhite">
                Paso 3: ¡Comparte el mazo y compite con tus amigos!
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
