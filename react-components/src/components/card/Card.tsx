import React from 'react';
import { ICard } from '../../interface/icard';
import { Tag } from '../tag/Tag';
import './card.scss';

export const Card = (props: ICard): JSX.Element => {
  const {
    image, title, author, tags, countLikes, countWatchers,
  } = props;

  return (
    <div className="card">
      <img
        className="card__image"
        src={`./image/${image}`}
        alt="Card"
      />
      <h2 className="card__title">{title}</h2>
      <h3 className="card__subtitle">
        by
        <strong>{author}</strong>
      </h3>
      <ul className="card__tags">
        {tags.map((item: string, i: number) => (
          <Tag tag={item} key={i.toString()} />
        ))}
      </ul>
      <div className="card__info">
        <p className="card__likes">{countLikes}</p>
        <p className="card__watchers">{countWatchers}</p>
      </div>
    </div>
  );
};
