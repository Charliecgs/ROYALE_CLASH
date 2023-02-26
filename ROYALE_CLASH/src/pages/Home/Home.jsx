import './Home.css';

import { useContext } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { UserContext } from '../../context/UserContext';
import SelectLanguages from '../../components/SelectLamnguages/SelectLanguages';
const Home = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useContext(UserContext);
  return (
    <main className="main-home">
      <SelectLanguages />
      <div className="container">
        <div className="red">
          <div className="description">
            <h1 className="borderWhite text-xl">
              <FormattedMessage id="home.content" />
            </h1>
            <p className="borderWhite">
              <FormattedMessage id="home.1" />
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
              <span className="bn54span">
                <FormattedMessage id="home.2" />
              </span>{' '}
            </button>
          </div>

          <div className="tutorial">
            <div className="tutorial1">
              <img
                src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677246882/ClashRoyale/Mazos_czajbv.jpg"
                alt="tutorial 1"
              />
              <p className="borderWhite">
                <FormattedMessage id="home.3" />
              </p>
            </div>
            <div className="tutorial1">
              <img
                src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677246882/ClashRoyale/Mazos_czajbv.jpg"
                alt="tutorial 1"
              />
              <p className="borderWhite">
                <FormattedMessage id="home.4" />
              </p>
            </div>
            <div className="tutorial1">
              <img
                src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677246882/ClashRoyale/Mazos_czajbv.jpg"
                alt="tutorial 1"
              />
              <p className="borderWhite">
                <FormattedMessage id="home.5" />
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
