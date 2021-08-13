export class API {
  private baseURL = 'https://newsapi.org/v2';

  private apiKey = '89b111fd925245659432b60fe96e76e4';

  public getNews = async (
    query: string,
    page: number,
    limit = 20
  ): Promise<any> => {
    const response = await fetch(
      `${this.baseURL}/everything?q=${query}&apiKey=${this.apiKey}&pageSize=${limit}&page=${page}`
    );

    return await response.json();
  };
}
