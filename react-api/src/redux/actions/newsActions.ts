import { Dispatch } from 'react';
import {
  NewsAction,
  NewsTypes,
  requestSearchData,
} from '../../interfaces/newsTypes';
import {
  API_KEY,
  BASE_URL,
  IArticle,
  IRequestData,
} from '../../interfaces/types';

export const requestNews = (): NewsAction => {
  return { type: NewsTypes.REQUEST_NEWS };
};

export const receiveNews = (data: IArticle[]): NewsAction => {
  return { type: NewsTypes.RECEIVE_NEWS, payload: data };
};

export const errorNews = (error: string): NewsAction => {
  return { type: NewsTypes.ERROR_NEWS, payload: error };
};

export const getNews = (searchData: requestSearchData) => {
  return async (dispatch: Dispatch<NewsAction>) => {
    const { query, sort, page, limit } = searchData;

    dispatch(requestNews());

    await fetch(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}
    &pageSize=${limit}&page=${page}&sortBy=${sort}`)
      .then((response) => response.json())
      .then((data: IRequestData) => dispatch(receiveNews(data.articles)))
      .catch((error: string) => dispatch(errorNews(error)));
  };
};
