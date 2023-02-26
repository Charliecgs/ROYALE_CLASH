import './Review.css';

import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

const Review = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const inputRev = useRef(null);
  const inputVal = useRef(null);
  let comentario = '';
  let valoracion = '';
  const reviews = [
    {
      usuario: 'juan',
      comentario: 'Increible web una de las mejores que he visto ',
      valoracion: '9',
    },
    {
      usuario: 'Hater',
      comentario:
        'menuda basura de app que tengas que pagar para tener mas mazos es una verguenza',
      valoracion: '1',
    },
    {
      usuario: 'Mclovin',
      comentario: 'muy buena pagina me ha encantado',
      valoracion: '10',
    },
  ];
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="main-review">
      <div className="formularioReview">
        <h1>Hola {user}</h1>
        <h1>Dejanos tu comentario!!!</h1>
        <input
          type="text"
          ref={inputRev}
          placeholder="Deja tu comentario"
          maxLength={30}
          className="inputreview"
        />
        <input type={'number'} min={'1'} max={'10'} ref={inputVal} />
        <button
          className="bg-blue-500 border border-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded"
          onClick={() => {
            if (inputRev.current.value !== '' || inputRev.current.value !== null) {
              comentario = inputRev.current.value;
              valoracion = inputVal.current.value;
              reviews.push({
                usuario: user,
                comentario: comentario,
                valoracion: valoracion,
              });
            }
          }}
        >
          Enviar
        </button>
      </div>
      <button
        className="bg-blue-500 border border-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded"
        onClick={() => {
          setLoaded(true);
        }}
      />
      {/* <div className="listacomentarios">
        {loaded ? (
          reviews.map((review) => {
            <div className="listaitem">
              <h1>{review.usuario} a comentado:</h1>
              <h3>{review.comentario}</h3>
              <p>{review.valoracion}</p>
            </div>;
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div> */}
    </main>
  );
};

export default Review;
