import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { RootState } from '../../interfaces/types';
import { getDetailsNews } from '../../redux/actions/detailsActions';
import './details.scss';

type DetailsType = {
  id: string;
};

export const Details = (): JSX.Element => {
  const { id } = useParams<DetailsType>();
  const details = useSelector((state: RootState) => state.details.article);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getDetailsNews(id));
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <section className="details">
      <div className="details__wrapper">
        <img className="details__image" src={details?.urlToImage} alt="news" />
        <div className="details__info">
          <h2 className="details__title">{details?.title}</h2>
          <div className="details__wrapper">
            <h3 className="details__author">{details?.author}</h3>
            <p className="details__published">{details?.publishedAt}</p>
          </div>
        </div>
      </div>
      <p className="details__content">{details?.content}</p>
    </section>
  );
};
