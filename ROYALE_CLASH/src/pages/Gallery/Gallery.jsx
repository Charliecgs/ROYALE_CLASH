import './Gallery.css';

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import getCharacter from '../../components/getCharacter/getCharacter';
import useDebounce from '../../hook/useDebonced';
import MainGallery from '../../layouts/MainGallery';

const Gallery = () => {
  const { clash, setClash } = useContext(UserContext);
  const [filterClash, setFilterClash] = useState([]);

  const debouncedValue = useDebounce(filterClash, 1000);

  const getClash = async () => {
    const res = await axios.get('https://63f74109e40e087c958aaa97.mockapi.io/items');
    const data = res.data;
    setClash(data);
    setFilterClash(data);
  };

  useEffect(() => {
    getClash();
  }, []);

  const charactersFilter = (key) => {
    const filter = clash.filter(
      (item) =>
        item.items.name.toLowerCase().includes(key.toLowerCase()) ||
        item.items.elixir.includes(key),
    );
    setFilterClash(filter);
  };
  return (
    <main>
      <div className="cl-input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(ev) => charactersFilter(ev.target.value)}
        />
      </div>
      {debouncedValue ? (
        <MainGallery>
          {debouncedValue.map((character) => (
            <getCharacter character={character} key={character.id} />
          ))}
        </MainGallery>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Gallery;
