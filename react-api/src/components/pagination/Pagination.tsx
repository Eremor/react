import React, { ChangeEvent, useState } from 'react';
import './pagination.scss';

export const Pagination = ({
  setPageLimit,
  setPageNumber,
  pageNumber,
  lastPage,
}: any): JSX.Element => {
  const [pageCount, setPageCount] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validate();
    setPageCount('');
  };

  const validate = () => {
    const regexp = /\d+/;
    const matchedPageCount = pageCount.match(regexp);

    if (matchedPageCount) {
      const newValue = +matchedPageCount[0];

      if (newValue > 0 && newValue <= lastPage) {
        setPageNumber(newValue);
        setError('');
      } else {
        setError('error');
      }
    } else {
      setError('error');
      setPageCount('');
    }
  };

  return (
    <div className="pagination">
      <form className="pagination__wrapper" onSubmit={handleSubmit}>
        <label className="pagination__text">
          Go to page number:
          <input
            className="pagination__input"
            type="text"
            value={pageCount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPageCount(e.target.value);
            }}
          />
          {error === 'error' && (
            <span className="error">{`* select page from 1 to ${lastPage}`}</span>
          )}
        </label>
        <p className="pagination__text">
          News per page:
          <select
            className="pagination__limit"
            name="pageLimit"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setPageLimit(e.target.value);
              setPageNumber(1);
            }}
          >
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="27">27</option>
          </select>
        </p>
        <p className="pagination__text">{`Last page: ${lastPage}`}</p>
      </form>
      <div className="pagination__wrapper">
        <button
          className="pagination__button"
          onClick={() => setPageNumber(1)}
          disabled={pageNumber === 1}
        >
          &laquo;
        </button>
        <button
          className="pagination__button"
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          &lt;
        </button>
        <p className="pagination__number">{pageNumber}</p>
        <button
          className="pagination__button"
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber === lastPage}
        >
          &gt;
        </button>
        <button
          className="pagination__button"
          onClick={() => setPageNumber(lastPage)}
          disabled={pageNumber === lastPage}
        >
          &raquo;
        </button>
      </div>
      <p className="error__message">
        Free version is limited to 11 pages. Please don't go beyond
      </p>
    </div>
  );
};
