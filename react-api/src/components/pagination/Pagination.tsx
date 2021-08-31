import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MAX_PAGE_SIZE, RootState } from '../../interfaces/types';
import { setLimit, setPage } from '../../redux/actions/requestValueAction';
import './pagination.scss';

export const Pagination = (): JSX.Element => {
  const requestValue = useSelector((state: RootState) => state.requestValue);
  const dispatch = useDispatch();

  const { page, limit } = requestValue;

  const [pageCount, setPageCount] = useState<string>('');
  const [error, setError] = useState<string>('');

  const lastPage = Math.floor(MAX_PAGE_SIZE / limit);

  const validate = () => {
    const regexp = /\d+/;
    const matchedPageCount = pageCount.match(regexp);

    if (matchedPageCount) {
      const newValue = +matchedPageCount[0];

      if (newValue > 0 && newValue <= lastPage) {
        dispatch(setPage(newValue));
        setError('');
      } else {
        setError('error');
      }
    } else {
      setError('error');
      setPageCount('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validate();
    setPageCount('');
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
            <span className="error">
              {`* select page from 1 to ${lastPage}`}
            </span>
          )}
        </label>
        <p className="pagination__text">
          News per page:
          <select
            className="pagination__limit"
            name="pageLimit"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              dispatch(setLimit(+e.target.value));
              dispatch(setPage(1));
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </p>
        <p className="pagination__text">{`Last page: ${lastPage}`}</p>
      </form>
      <div className="pagination__wrapper">
        <button
          type="button"
          className="pagination__button"
          onClick={() => dispatch(setPage(1))}
          disabled={page === 1}
        >
          &laquo;
        </button>
        <button
          type="button"
          className="pagination__button"
          onClick={() => dispatch(setPage(page - 1))}
          disabled={page === 1}
        >
          &lt;
        </button>
        <p className="pagination__number">{page}</p>
        <button
          type="button"
          className="pagination__button"
          onClick={() => dispatch(setPage(page + 1))}
          disabled={page === lastPage}
        >
          &gt;
        </button>
        <button
          type="button"
          className="pagination__button"
          onClick={() => dispatch(setPage(lastPage))}
          disabled={page === lastPage}
        >
          &raquo;
        </button>
      </div>
      <p className="error__message">
        Free version is limited to 11 pages. Please don&apos;t go beyond
      </p>
    </div>
  );
};
