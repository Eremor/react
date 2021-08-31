import { Dispatch } from 'react';
import { DetailsAction, DetailsTypes } from '../../interfaces/detailsTypes';
import {
  API_KEY,
  BASE_URL,
  IArticle,
  IRequestData,
} from '../../interfaces/types';

export const requestDetails = (): DetailsAction => {
  return { type: DetailsTypes.REQUEST_DETAILS };
};

export const receiveDetails = (data: IArticle): DetailsAction => {
  return { type: DetailsTypes.RECEIVE_DETAILS, payload: data };
};

export const errorDetails = (error: string): DetailsAction => {
  return { type: DetailsTypes.ERROR_DETAILS, payload: error };
};

export const getDetailsNews = (qInTitle: string) => {
  return async (dispatch: Dispatch<DetailsAction>): Promise<void> => {
    dispatch(requestDetails());

    await fetch(`${BASE_URL}/everything?apiKey=${API_KEY}&qInTitle=${qInTitle}`)
      .then((response) => response.json())
      .then((data: IRequestData) => dispatch(receiveDetails(data.articles[0])))
      .catch((error: string) => dispatch(errorDetails(error)));
  };
};
