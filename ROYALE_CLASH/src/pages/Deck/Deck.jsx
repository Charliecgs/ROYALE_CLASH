import './Deck.css';

import React, { useContext, useState } from 'react';

import { UserContext } from '../../context/UserContext';
import useDebounce from '../../hook/useDebonced';

const Deck = () => {
  const { clash } = useContext(UserContext);
  const [filterClash, setFilterClash] = useState([]);

  const debouncedValue = useDebounce(filterClash, 2000);

  const charactersFilter = (key) => {
    const filter = clash.filter(
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
          {debouncedValue ? (
            debouncedValue.map((character) => (
              <figure className="cr-figure" key={character.id}>
                <img src={character.iconUrls.medium} alt={character.name} />
                <p className="cr-p1">{character.name}</p>
                <p className="cr-p2">Level {JSON.stringify(character.maxLevel)}</p>
                <p className="cr-p3">Elixir cost {character.elixir}</p>
                <button>añadir</button>
              </figure>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
          <div className="spinner">
            <img
              src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677260389/ClashRoyale/knightreduced_jgxrou.gif"
              alt="loading spinner"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
<h1>https://63ee4213d466e0c18bac9016.mockapi.io/deck</h1>;
export default Deck;
