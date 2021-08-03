import React from 'react';
import './search-bar.scss';

export const SearchBar = (): JSX.Element => {
  return (
    <form className="search-bar">
      <label htmlFor="header-search">
        <input
          type="text"
          id="header-search"
          name="search"
          className="search-bar__body"
        />
      </label>
      <button className="search-bar__button" type="submit">
        <span className="visually-hidden">Search</span>
      </button>
    </form>
  );
};
