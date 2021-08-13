import React from 'react';
import { IFormValue } from '../../interface/iformvalue';
import './card.scss';

type CardProps = {
  formData: IFormValue;
};

export const Card = ({ formData }: CardProps): JSX.Element => {
  const { firstName, lastName, birthday, nationality, gender } = formData;

  return (
    <div className="card">
      <h3 className="card__name">
        <strong>Name:</strong>
        {firstName}
      </h3>
      <h3 className="card__surname">
        <strong>Surname</strong>
        {lastName}
      </h3>
      <p className="card__birthday">
        <strong>Birthday:</strong>
        {birthday}
      </p>
      <p className="card__nationality">
        <strong>Nationality:</strong>
        {nationality}
      </p>
      <p className="card__gender">
        <strong>Gender:</strong>
        {gender}
      </p>
    </div>
  );
};
