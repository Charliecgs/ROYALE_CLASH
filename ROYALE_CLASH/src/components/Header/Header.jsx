import './Header.css';

import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <header className="">
      <img
        className="imgLogo p-3"
        src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677169745/ClashRoyale/clash-royale-png-46155_fweugv.png"
        alt="Crown logo"
      />

      <ul>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li>{user == null && <NavLink to="/login">Login</NavLink>}</li>
        <li>
          <NavLink to="/gallery">CARTAS</NavLink>{' '}
        </li>{' '}
        <li>
          {' '}
          <NavLink to="/">
            <img
              className="imgBanner"
              src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677170946/ClashRoyale/clashrecortado_dxogp6.png"
              alt="Clash Royale"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/deck">MAZOS</NavLink>{' '}
        </li>
        <li>
          <NavLink to="/review">Reviews</NavLink>{' '}
        </li>
        <li>
          {user !== null && (
            <button
              className="bg-blue-500 border border-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded"
              onClick={() => logout()}
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
