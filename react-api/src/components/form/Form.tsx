import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getQuery } from '../../redux/actions/requestValueAction';
import './form.scss';

export const Form = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchValue !== '') {
      dispatch(getQuery(searchValue));
    }
    setSearchValue('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          className="form__search"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Type to search..."
        />
      </label>
      <button className="form__button" type="submit">
        <span className="visually-hidden">Search</span>
      </button>
    </form>
  );
};
