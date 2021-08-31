import { IArticle } from './types';

export interface NewsState {
  articles: IArticle[];
  loading: boolean;
  error: string | null;
}

export enum NewsTypes {
  REQUEST_NEWS = 'REQUEST_NEWS',
  RECEIVE_NEWS = 'RECEIVE_NEWS',
  ERROR_NEWS = 'ERROR_NEWS',
}

interface RequestNews {
  type: NewsTypes.REQUEST_NEWS;
}

interface ReceiveNews {
  type: NewsTypes.RECEIVE_NEWS;
  payload: IArticle[];
}

interface ErrorNews {
  type: NewsTypes.ERROR_NEWS;
  payload: string;
}

export type NewsAction = RequestNews | ReceiveNews | ErrorNews;
