import {
  RequestSearchData,
  RequestValueAction,
  RequestValueTypes,
} from '../../interfaces/requestValueTypes';

const initialState: RequestSearchData = {
  query: '',
  sort: 'publishedAt',
  page: 1,
  limit: 10,
};

export const requestValueReducer = (
  state = initialState,
  action: RequestValueAction
): RequestSearchData => {
  switch (action.type) {
    case RequestValueTypes.GET_QUERY:
      return { ...state, query: action.payload };
    case RequestValueTypes.GET_SORT:
      return { ...state, sort: action.payload };
    case RequestValueTypes.GET_PAGE:
      return { ...state, page: action.payload };
    case RequestValueTypes.GET_LIMIT:
      return { ...state, limit: action.payload };
    default:
      return state;
  }
};
