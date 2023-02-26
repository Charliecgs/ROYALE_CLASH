import './getReviews.css';

import React from 'react';
const GetReviews = ({ review }) => {
  return (
    <figure className="listaitem">
      <h1 className="usuario">{review.usuario}</h1>
      <h3>{review.comentario}</h3>
      <p>Ha dado una valoracion de: {review.valoracion}</p>
    </figure>
  );
};

export default GetReviews;
