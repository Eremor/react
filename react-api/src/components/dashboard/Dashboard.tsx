import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/actions/newsActions';
import { rootReducer } from '../../redux/reducers/rootReducer';
import { Article } from '../article/Article';
import { Filters } from '../filters/Filters';
import { Form } from '../form/Form';
import { Pagination } from '../pagination/Pagination';
import './dashboard.scss';

type RootState = ReturnType<typeof rootReducer>;

export const Dashboard = (): JSX.Element => {
  const news = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch();

  const MAX_PAGE_SIZE = 100;

  const [queryValue, setQueryValue] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [pageLimit, setPageLimit] = useState<number>(9);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  useEffect(() => {
    if (queryValue !== '') {
      try {
        dispatch(
          getNews({
            query: queryValue,
            sort: sortBy,
            page: pageNumber,
            limit: pageLimit,
          })
        );
        const lastPageCount = Math.floor(MAX_PAGE_SIZE / pageLimit);
        setLastPage(lastPageCount);
      } catch (e) {
        console.log(e);
      }
    }
  }, [sortBy, queryValue, pageNumber, pageLimit]);

  return (
    <section className="dashboard">
      <Form setFormValue={setQueryValue} />
      <div className="dashboard__nav">
        <Filters setSortBy={setSortBy} />
        <Pagination
          setPageLimit={setPageLimit}
          lastPage={lastPage}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
      <div className="dashboard__content">
        {news.articles.map((art, index) => (
          <Article article={art} key={index.toString()} />
        ))}
      </div>
      {news.loading && <div className="dashboard__loading">Loading...</div>}
    </section>
  );
};
