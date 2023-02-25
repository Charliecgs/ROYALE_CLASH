import './Deck.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

import useDebounce from '../../hook/useDebonced';
import MainGallery from '../../layouts/MainGallery';

const Deck = () => {
  const [filterClash, setFilterClash] = useState([]);
  const [royal, setRoyal] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [deck, setDeck] = useState([]);

  const debouncedValue = useDebounce(filterClash, 1000);

  const getClash = async () => {
    const res = await axios.get('https://63f74109e40e087c958aaa97.mockapi.io/items');
    const data = res.data[0].items;
    setRoyal(data);
    setFilterClash(data);
    setLoaded(true);
  };

  const charactersFilter = (key) => {
    const filter = royal.filter(
      (item) =>
        item.name.toLowerCase().includes(key.toLowerCase()) || item.elixir.includes(key),
    );
    setFilterClash(filter);
  };

  const getDeck = async () => {
    const res = await axios.get('https://63ee4213d466e0c18bac9016.mockapi.io/deck');
    const data = res.data;
    setDeck(data);
    setLoaded2(true);
    console.log(res);
  };

  const upgrade = () => {
    Swal.fire({
      title: '¡Consigue premium!',
      text: 'Suscríbete a RoyaleClash Premium© por solo 9$ al mes, para conseguir: Mazos ilimitados, acceso a mazos ProPlayer +3000 trofeos, ¡y mucho mas! ',
      width: 600,
      padding: '0rem',
      color: '#000000',
      background: '#fff',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://res.cloudinary.com/dqkcdzt1m/image/upload/v1677344711/kingreduced_l5w3yi.gif")
        left top
        no-repeat
      `,
    });
  };

  useEffect(() => {
    getClash();
    getDeck();
  }, []);

  return (
    <main>
      <div className="deck-container>">
        <div className="all-decks">
          <NavLink to={'/deck'} className="deck1">
            <button id="buttonOne" className="button1 bg-red-500">
              Mazo 1
            </button>
          </NavLink>
          <NavLink to={'/deck2'}>
            <button>Mazo 2</button>
          </NavLink>
          <NavLink to={'/deck3'}>
            <button>Mazo 3</button>
          </NavLink>
          <button onClick={upgrade}>¡Mazos extra!</button>
        </div>
        <div className="decks">
          {loaded2 ? (
            deck.map((item) => (
              <figure className="cr-figureDeck" key={item.id}>
                <img src={item.iconUrls.medium} alt={item.name} />
                <p className="cr-p1">{item.name}</p>
                <p className="cr-p2">Level {JSON.stringify(item.maxLevel)}</p>
                <p className="cr-p3">Elixir cost {item.elixir}</p>
                <button
                  className="btn1"
                  onClick={(ev) => {
                    ev.target.disabled = false;
                    fetch(`https://63ee4213d466e0c18bac9016.mockapi.io/deck/${item.id}`, {
                      method: 'DELETE',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    }).then(() => {
                      getDeck();
                    });
                  }}
                >
                  Eliminar
                </button>
              </figure>
            ))
          ) : (
            <img
              src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677260389/ClashRoyale/knightreduced_jgxrou.gif"
              alt="loading spinner"
            />
          )}
        </div>
        <div className="all-cards">
          {' '}
          <div className="cl-input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(ev) => charactersFilter(ev.target.value)}
            />
          </div>
          {loaded ? (
            <MainGallery>
              {debouncedValue.map((character) => (
                <figure className="cr-figure" key={character.id}>
                  <img src={character.iconUrls.medium} alt={character.name} />
                  <p className="cr-p1">{character.name}</p>
                  <p className="cr-p2">Level {JSON.stringify(character.maxLevel)}</p>
                  <p className="cr-p3">Elixir cost {character.elixir}</p>
                  {deck.filter((item) => item.name === character.name).length == 0 && (
                    <button
                      className="btn"
                      onClick={() => {
                        {
                          deck.length < 8
                            ? fetch('https://63ee4213d466e0c18bac9016.mockapi.io/deck', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(character),
                              }).then(() => {
                                getDeck();
                              })
                            : Swal.fire({
                                icon: 'error',
                                title: 'Máximo alcanzado',
                                text: 'El máximo de cartas por mazo es 8. Por favor, borra alguna para poder añadir nuevas.',
                                timer: 4500,
                                timerProgressBar: true,
                              });
                        }
                      }}
                    >
                      Añadir
                    </button>
                  )}
                </figure>
              ))}
            </MainGallery>
          ) : (
            <div className="spinner">
              <img
                src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677260389/ClashRoyale/knightreduced_jgxrou.gif"
                alt="loading spinner"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
<h1>https://63ee4213d466e0c18bac9016.mockapi.io/deck</h1>;
export default Deck;
