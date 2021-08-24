import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <ul className="nav">
        <li className="nav__link">
          <NavLink
            exact
            activeClassName="nav__link--active"
            to={{ pathname: '/', state: { fromHome: true } }}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__link">
          <NavLink
            activeClassName="nav__link--active"
            to={{ pathname: '/about', state: { fromAbout: true } }}
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
