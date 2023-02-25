import './Deck.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    getClash();
    getDeck();
  }, []);

  return (
    <main>
      <div className="deck-container>">
        <div className="all-decks">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
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
            <h1>hola</h1>
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
export default Deck;
