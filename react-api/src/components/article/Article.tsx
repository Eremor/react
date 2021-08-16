import React from 'react';
import { IArticle } from '../../interfaces/iarticle';
import './article.scss';

export const Article = (): JSX.Element => {
  // const { urlToImage, title, author, publishedAt, content } = article
  return (
    <article className="news">
      <img
        className="news__img"
        src="https://s.yimg.com/os/creatr-uploaded-images/2020-11/74c373a1-244d-11eb-af8f-77d21fbd118b"
        alt="News image"
      />
      <div className="news__content">
        <h2 className="news__title">
          HomePods get spatial audio and Apple Music lossless support in latest
          beta
        </h2>
        <div className="news__wrapper">
          <h3 className="news__author">Kris Holt</h3>
          <p className="news__published">2021-08-12</p>
        </div>
        <p className="news__description">
          "It looks like HomePod and HomePod mini will soon have support for
          spatial audio and lossless audio via Apple Music. The HomePod 15 beta
          5 includes options that enable lossless and Dolby Atmos playback.Not
          all beta users will see the toggles, according t…"
        </p>
      </div>
    </article>
  );
};
