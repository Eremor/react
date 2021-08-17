import React, { useEffect, useState } from 'react';
import { IArticle, IRequestData } from '../../interfaces/types';
import { api } from '../../services/api';
import { Article } from '../article/Article';
import { Filters } from '../filters/Filters';
import { Form } from '../form/Form';
import './dashboard.scss';

export const Dashboard = (): JSX.Element => {
  const [queryValue, setQueryValue] = useState<string>('');
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [sortBy, setSortBy] = useState<string>('');

  const getArticles = async () => {
    try {
      const response: IRequestData = await api.getNews(queryValue, sortBy, 1);
      setArticles(response.articles);
    } catch (error) {
      new Error(error);
    }
  };

  useEffect(() => {
    if (queryValue !== '') {
      getArticles();
    }
  }, [sortBy, queryValue]);

  return (
    <div className="dashboard">
      <Form setFormValue={setQueryValue} />
      <div className="dashboard__nav">
        <Filters setSortBy={setSortBy} />
        <div className="dashboard__pagination"></div>
      </div>
      <div className="dashboard__content">
        {articles.map((art, index) => (
          <Article article={art} key={index.toString()} />
        ))}
      </div>
    </div>
  );
};
