import React, { useEffect, useState } from 'react';
import { ICard } from '../../interface/icard';
import { Card } from './Card';
import './cards-container.scss';

export const CardContainer = (): JSX.Element => {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    await fetch('./cards.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="cards-container">
      {cards.map((card: ICard, i: number) => (
        <Card
          key={i}
          image={card.image}
          title={card.title}
          author={card.author}
          tags={card.tags}
          countLikes={card.countLikes}
          countWatchers={card.countWatchers}
        />
      ))}
    </div>
  );
};
