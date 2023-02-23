import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img
        className="imgLogo"
        src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677169745/ClashRoyale/clash-royale-png-46155_fweugv.png"
        alt="Crown logo"
      />
      <img
        className="imgBanner"
        src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677170946/ClashRoyale/clashrecortado_dxogp6.png"
        alt="Clash Royale"
      />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>{' '}
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>{' '}
        </li>
        <li>
          <NavLink to="/deck">Deck</NavLink>{' '}
        </li>
        <li>
          <NavLink to="/review">Review</NavLink>{' '}
        </li>
      </ul>
    </header>
  );
};

export default Header;
