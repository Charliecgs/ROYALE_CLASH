import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="">
      <img
        className="imgLogo"
        src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677169745/ClashRoyale/clash-royale-png-46155_fweugv.png"
        alt="Crown logo"
      />

      <ul>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/login">Login</NavLink>{' '}
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>{' '}
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
          <NavLink to="/deck">Deck</NavLink>{' '}
        </li>
        <li>
          <NavLink to="/review">Review</NavLink>{' '}
        </li>
        <li>
          <button className="bg-blue-500 border border-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded">
            Logout
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
