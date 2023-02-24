import './getCharacter.css';

import React from 'react';

const GetCharacter = ({ character }) => {
  return (
    <figure className="cr-figure">
      <img src={character.img} alt={character.name} />
      <p>{character.name}</p>
    </figure>
  );
};

export default GetCharacter;
