import React, { ChangeEvent, ErrorInfo, useState } from 'react';
import { IArticle } from '../../interfaces/iarticle';
import { api } from '../../services/api';
import './form.scss';

type FormValueType = {
  setFormValue: (searchValue: string) => void;
  setArticles: (articles: IArticle[]) => void;
};

type RequestData = {
  articles: IArticle[];
  status: string;
  totalResult: number;
};

export const Form = ({
  setFormValue,
  setArticles,
}: FormValueType): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const getArticles = async () => {
    try {
      const response: RequestData = await api.getNews(searchValue, 1);
      console.log(response);
      setArticles(response.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchValue !== '') {
      setFormValue(searchValue);
      getArticles();
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
