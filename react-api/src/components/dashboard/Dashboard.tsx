import React, { useEffect, useState } from 'react';
import { IArticle, IRequestData } from '../../interfaces/types';
import { api } from '../../services/api';
import { Article } from '../article/Article';
import { Filters } from '../filters/Filters';
import { Form } from '../form/Form';
import { Pagination } from '../pagination/Pagination';
import './dashboard.scss';

export const Dashboard = (): JSX.Element => {
  const MAX_PAGE_SIZE = 100;
  const [queryValue, setQueryValue] = useState<string>('');
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const [pageLimit, setPageLimit] = useState<number>(9);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getArticles = async () => {
    try {
      setIsLoading(true);

      const response: IRequestData = await api.getNews(
        queryValue,
        sortBy,
        pageNumber,
        pageLimit
      );
      setArticles(response.articles);
      const lastPageCount = Math.floor(MAX_PAGE_SIZE / pageLimit);
      setLastPage(lastPageCount);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (queryValue !== '') {
      getArticles();
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
        {articles.map((art, index) => (
          <Article article={art} key={index.toString()} />
        ))}
      </div>
      {isLoading && <div className="dashboard__loading">Loading...</div>}
    </section>
  );
};
