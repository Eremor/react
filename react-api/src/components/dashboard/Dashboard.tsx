import React, { useEffect, useState } from 'react';
import { IArticle, IPageValue, IRequestData } from '../../interfaces/types';
import { api } from '../../services/api';
import { Article } from '../article/Article';
import { Filters } from '../filters/Filters';
import { Form } from '../form/Form';
import { Pagination } from '../pagination/Pagination';
import './dashboard.scss';

export const Dashboard = (): JSX.Element => {
  const [queryValue, setQueryValue] = useState<string>('');
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const [pageLimit, setPageLimit] = useState<number>(9);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  const getArticles = async () => {
    try {
      const response: IRequestData = await api.getNews(
        queryValue,
        sortBy,
        pageNumber,
        pageLimit
      );
      setArticles(response.articles);
      console.log(response.totalResults, lastPage);
      const lastPageCount = Math.ceil(response.totalResults / pageLimit);
      setLastPage(lastPageCount);
    } catch (error) {
      new Error(error);
    }
  };

  useEffect(() => {
    if (queryValue !== '') {
      getArticles();
    }
  }, [sortBy, queryValue, pageNumber, pageLimit]);

  return (
    <div className="dashboard">
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
    </div>
  );
};
