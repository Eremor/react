import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IArticle, IRequestData } from '../../interfaces/types';
import { api } from '../../services/api';
import './details.scss';

type DetailsType = {
  id: string;
};

export const Details = (): JSX.Element => {
  const { id } = useParams<DetailsType>();
  const [article, setArticle] = useState<IArticle>();

  const getDetails = async () => {
    try {
      const response: IRequestData = await api.getDetailsNews(id);
      setArticle(response.articles[0]);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getDetails();
  });

  return (
    <section className="details">
      <div className="details__wrapper">
        <img className="details__image" src={article?.urlToImage} alt="news" />
        <div className="details__info">
          <h2 className="details__title">{article?.title}</h2>
          <div className="details__wrapper">
            <h3 className="details__author">{article?.author}</h3>
            <p className="details__published">{article?.publishedAt}</p>
          </div>
        </div>
      </div>
      <p className="details__content">{article?.content}</p>
    </section>
  );
};
