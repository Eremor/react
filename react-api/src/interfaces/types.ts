import { rootReducer } from '../redux/reducers/rootReducer';

export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  urlToImage: string;
}

export type IRequestData = {
  articles: IArticle[];
  status: string;
  totalResults: number;
};

export type IPage = {
  pageNumber: number;
  pageLimit: number;
};

export type IPageValue = {
  pageValue: IPage;
};

export type RootState = ReturnType<typeof rootReducer>;

export const BASE_URL = 'https://newsapi.org/v2';
export const API_KEY = '89b111fd925245659432b60fe96e76e4';
export const MAX_PAGE_SIZE = 100;
