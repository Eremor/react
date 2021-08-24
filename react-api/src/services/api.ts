import { IRequestData } from '../interfaces/types';

class API {
  private baseURL = 'https://newsapi.org/v2';

  private apiKey = '89b111fd925245659432b60fe96e76e4';

  public getNews = async (
    query: string,
    sort = 'publishedAt',
    page: number,
    limit = 30
  ): Promise<IRequestData> => {
    const response = await fetch(
      `${this.baseURL}/everything?q=${query}&apiKey=${this.apiKey}
      &pageSize=${limit}&page=${page}&sortBy=${sort}`
    );

    return response.json();
  };

  public getDetailsNews = async (qInTitle: string): Promise<IRequestData> => {
    const response = await fetch(
      `${this.baseURL}/everything?qInTitle=${qInTitle}&apiKey=${this.apiKey}`
    );

    return response.json();
  };
}

export const api = new API();
