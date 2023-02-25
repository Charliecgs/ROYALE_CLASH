import './Deck3.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useDebounce from '../../hook/useDebonced';
import MainGallery from '../../layouts/MainGallery';

const Deck3 = () => {
  const [filterClash3, setFilterClash3] = useState([]);
  const [royal3, setRoyal3] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [deck3, setDeck2] = useState([]);

  const debouncedValue2 = useDebounce(filterClash3, 1000);

  const getClash3 = async () => {
    const res = await axios.get('https://63f74109e40e087c958aaa97.mockapi.io/items');
    const data = res.data[0].items;
    setRoyal3(data);
    setFilterClash3(data);
    setLoaded(true);
  };

  const charactersFilter = (key) => {
    const filter = royal3.filter(
      (item) =>
        item.name.toLowerCase().includes(key.toLowerCase()) || item.elixir.includes(key),
    );
    setFilterClash3(filter);
  };

  const getDeck3 = async () => {
    const res = await axios.get(
      'https://63f35ae3864fb1d60014ed36.mockapi.io/boardgames/deck3',
    );
    const data = res.data;
    setDeck2(data);
    setLoaded2(true);
    console.log(res);
  };

  useEffect(() => {
    getClash3();
    getDeck3();
  }, []);

  return (
    <main>
      <div className="deck-container>">
        <div className="all-decks">
          <NavLink to={'/deck'}>
            <button>1</button>
          </NavLink>
          <NavLink to={'/deck2'}>
            <button>2</button>
          </NavLink>
          <NavLink to={'/deck3'}>
            <button>3</button>
          </NavLink>
          <button>+</button>
        </div>
        <div className="decks">
          {loaded2 ? (
            deck3.map((item) => (
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
                      `https://63f35ae3864fb1d60014ed36.mockapi.io/boardgames/deck3/${item.id}`,
                      {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      },
                    ).then(() => {
                      getDeck3();
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
                  {deck3.filter((item) => item.name === character.name).length == 0 && (
                    <button
                      className="btn"
                      onClick={() => {
                        {
                          deck3.length < 8
                            ? fetch(
                                'https://63f35ae3864fb1d60014ed36.mockapi.io/boardgames/deck3',
                                {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify(character),
                                },
                              ).then(() => {
                                getDeck3();
                              })
                            : alert('Has alcanzado el maximo de cartas');
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
export default Deck3;