import {
  RequestValueAction,
  RequestValueTypes,
} from '../../interfaces/requestValueTypes';

export const getQuery = (query: string): RequestValueAction => {
  return { type: RequestValueTypes.GET_QUERY, payload: query };
};

export const getSort = (sort: string): RequestValueAction => {
  return { type: RequestValueTypes.GET_SORT, payload: sort };
};

export const setPage = (page: number): RequestValueAction => {
  return { type: RequestValueTypes.GET_PAGE, payload: page };
};

export const setLimit = (limit: number): RequestValueAction => {
  return { type: RequestValueTypes.GET_LIMIT, payload: limit };
};
