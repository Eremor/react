export interface RequestSearchData {
  query: string;
  sort: string;
  page: number;
  limit: number;
}

export enum RequestValueTypes {
  GET_QUERY = 'GET_QUERY',
  GET_SORT = 'GET_SORT',
  GET_PAGE = 'GET_PAGE',
  GET_LIMIT = 'GET_LIMIT',
}

interface ReceiveQueryValue {
  type: RequestValueTypes.GET_QUERY;
  payload: string;
}

interface ReceiveSortValue {
  type: RequestValueTypes.GET_SORT;
  payload: string;
}

interface ReceivePageValue {
  type: RequestValueTypes.GET_PAGE;
  payload: number;
}

interface ReceiveLimitValue {
  type: RequestValueTypes.GET_LIMIT;
  payload: number;
}

export type RequestValueAction =
  | ReceiveQueryValue
  | ReceiveSortValue
  | ReceivePageValue
  | ReceiveLimitValue;
