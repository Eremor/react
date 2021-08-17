import React from 'react';
import { IArticle } from '../../interfaces/types';
import './article.scss';

type ArticleType = {
  article: IArticle;
};

export const Article = ({ article }: ArticleType): JSX.Element => {
  const { urlToImage, title, author, publishedAt, content } = article;

  return (
    <article className="news">
      <img className="news__img" src={urlToImage} alt="News" />
      <div className="news__content">
        <h2 className="news__title">{title}</h2>
        <div className="news__wrapper">
          <h3 className="news__author">{author}</h3>
          <p className="news__published">{publishedAt}</p>
        </div>
        <p className="news__description">{content}</p>
      </div>
    </article>
  );
};
