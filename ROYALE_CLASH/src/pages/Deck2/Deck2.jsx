import './Deck2.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

import useDebounce from '../../hook/useDebonced';
import MainGallery from '../../layouts/MainGallery';

const Deck2 = () => {
  const [filterClash2, setFilterClash2] = useState([]);
  const [royal2, setRoyal2] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [deck2, setDeck2] = useState([]);

  const debouncedValue2 = useDebounce(filterClash2, 1000);

  const getClash2 = async () => {
    const res = await axios.get('https://63f74109e40e087c958aaa97.mockapi.io/items');
    const data = res.data[0].items;
    setRoyal2(data);
    setFilterClash2(data);
    setLoaded(true);
  };

  const charactersFilter = (key) => {
    const filter = royal2.filter(
      (item) =>
        item.name.toLowerCase().includes(key.toLowerCase()) || item.elixir.includes(key),
    );
    setFilterClash2(filter);
  };

  const getDeck2 = async () => {
    const res = await axios.get('https://63f119b05703e063fa52c282.mockapi.io/deck1');
    const data = res.data;
    setDeck2(data);
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
      confirmButtonText: 'Que pasada, ¡me suscribo ya!',
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
    getClash2();
    getDeck2();
  }, []);

  return (
    <main>
      <div className="deck-container>">
        <div className="all-decks">
          <NavLink to={'/deck'}>
            <button>Mazo 1</button>
          </NavLink>
          <NavLink to={'/deck2'}>
            <button id="buttonTwo">Mazo 2</button>
          </NavLink>
          <NavLink to={'/deck3'}>
            <button>Mazo 3</button>
          </NavLink>
          <button onClick={upgrade}>¡Mazos extra!</button>
        </div>
        <div className="decks">
          {loaded2 ? (
            deck2.map((item) => (
              <figure className="cr-figureDeck" key={item.id}>
                <img src={item.iconUrls.medium} alt={item.name} />
                <p className="cr-p1">{item.name}</p>
                <p className="cr-p2">Level {JSON.stringify(item.maxLevel)}</p>
                <p className="cr-p3">Elixir cost {item.elixir}</p>
                <button
                  className="btn1"
                  onClick={(ev) => {
                    ev.target.disabled = false;
                    fetch(
                      `https://63f119b05703e063fa52c282.mockapi.io/deck1/${item.id}`,
                      {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      },
                    ).then(() => {
                      getDeck2();
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
              {debouncedValue2.map((character) => (
                <figure className="cr-figure" key={character.id}>
                  <img src={character.iconUrls.medium} alt={character.name} />
                  <p className="cr-p1">{character.name}</p>
                  <p className="cr-p2">Level {JSON.stringify(character.maxLevel)}</p>
                  <p className="cr-p3">Elixir cost {character.elixir}</p>
                  {deck2.filter((item) => item.name === character.name).length == 0 && (
                    <button
                      className="btn"
                      onClick={() => {
                        {
                          deck2.length < 8
                            ? fetch('https://63f119b05703e063fa52c282.mockapi.io/deck1', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(character),
                              }).then(() => {
                                getDeck2();
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
export default Deck2;
