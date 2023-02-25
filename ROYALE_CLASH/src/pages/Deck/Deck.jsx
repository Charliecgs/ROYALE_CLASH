import './Deck.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import useDebounce from '../../hook/useDebonced';
import MainGallery from '../../layouts/MainGallery';

const Deck = () => {
  const [filterClash, setFilterClash] = useState([]);
  const [royal, setRoyal] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const debouncedValue = useDebounce(filterClash, 1000);

  const getClash = async () => {
    const res = await axios.get('https://63f74109e40e087c958aaa97.mockapi.io/items');
    const data = res.data[0].items;
    setRoyal(data);
    setFilterClash(data);
    setLoaded(true);
  };

  useEffect(() => {
    getClash();
  }, []);

  const charactersFilter = (key) => {
    const filter = royal.filter(
      (item) =>
        item.name.toLowerCase().includes(key.toLowerCase()) || item.elixir.includes(key),
    );
    setFilterClash(filter);
  };

  return (
    <main>
      <div className="deck-container>">
        <div className="all-decks">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>+</button>
        </div>
        <div className="decks"></div>
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
                  <button className="btn">añadir</button>
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
