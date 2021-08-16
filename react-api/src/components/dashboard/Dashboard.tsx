import React, { useState } from 'react';
import { IArticle } from '../../interfaces/iarticle';
import { Article } from '../article/Article';
import { Form } from '../form/Form';
import './dashboard.scss';

export const Dashboard = (): JSX.Element => {
  const [queryValue, setQueryValue] = useState<string>('');
  const [articles, setArticles] = useState<IArticle[]>([]);

  console.log(articles);

  return (
    <div className="dashboard">
      <Form setFormValue={setQueryValue} setArticles={setArticles} />
      <Article />
    </div>
  );
};
