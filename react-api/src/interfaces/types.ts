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
