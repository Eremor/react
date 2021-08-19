import React from 'react';
import './filters.scss';

type SortType = {
  setSortBy: (sortBy: string) => void;
};

export const Filters = ({ setSortBy }: SortType): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const sortName: string = (e.target as HTMLButtonElement).dataset.sort!;
    setSortBy(sortName);
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
