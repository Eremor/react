import React from 'react';
import { ICard } from '../../interface/icard';
import { Tag } from '../tag/Tag';
import './card.scss';

export const Card = (props: ICard): JSX.Element => {
  return (
    <div className="card">
      <img
        className="card__image"
        src={`./image/${props.image}`}
        alt="Card Image"
      />
      <h2 className="card__title">{props.title}</h2>
      <h3 className="card__subtitle">
        by <strong>{props.author}</strong>
      </h3>
      <ul className="card__tags">
        {props.tags.map((item: string, i: number) => (
          <Tag tag={item} key={i} />
        ))}
      </ul>
      <div className="card__info">
        <p className="card__likes">{props.countLikes}</p>
        <p className="card__watchers">{props.countWatchers}</p>
      </div>
    </div>
  );
};
