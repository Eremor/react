import React from 'react';
import { useDispatch } from 'react-redux';
import { getSort } from '../../redux/actions/requestValueAction';
import './filters.scss';

export const Filters = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const sortName: string = (e.target as HTMLButtonElement).dataset.sort!;
    dispatch(getSort(sortName));
  };

  return (
    <div className="filter">
      <button
        type="button"
        className="filter__item"
        data-sort="popularity"
        onClick={handleClick}
      >
        Popularity
      </button>
      <button
        type="button"
        className="filter__item"
        data-sort="relevancy"
        onClick={handleClick}
      >
        Relevancy
      </button>
      <button
        type="button"
        className="filter__item"
        data-sort="publishedAt"
        onClick={handleClick}
      >
        PublishedAt
      </button>
    </div>
  );
};
