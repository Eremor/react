import React, { ChangeEvent, useState } from 'react';
import './form.scss';

type FormValueType = {
  setFormValue: (searchValue: string) => void;
};

export const Form = ({ setFormValue }: FormValueType): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchValue !== '') {
      setFormValue(searchValue);
    }
    resetSearch();
  };

  const resetSearch = (): void => {
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
