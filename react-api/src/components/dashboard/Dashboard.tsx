import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../interfaces/types';
import { getNews } from '../../redux/actions/newsActions';
import { Article } from '../article/Article';
import { Filters } from '../filters/Filters';
import { Form } from '../form/Form';
import { Pagination } from '../pagination/Pagination';
import './dashboard.scss';

export const Dashboard = (): JSX.Element => {
  const { news, requestValue } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const { query, sort, page, limit } = requestValue;

  useEffect(() => {
    if (query !== '') {
      try {
        dispatch(getNews({ query, sort, page, limit }));
      } catch (e) {
        console.log(e);
      }
    }
  }, [sort, query, page, limit]);

  return (
    <section className="dashboard">
      <Form />
      <div className="dashboard__nav">
        <Filters />
        <Pagination />
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
