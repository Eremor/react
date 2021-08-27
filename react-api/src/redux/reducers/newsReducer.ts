import { NewsAction, NewsState, NewsTypes } from '../../interfaces/newsTypes';

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

export const newsReducer = (
  state = initialState,
  action: NewsAction
): NewsState => {
  switch (action.type) {
    case NewsTypes.REQUEST_NEWS:
      return { ...state, loading: true };
    case NewsTypes.RECEIVE_NEWS:
      return { ...state, loading: false, articles: action.payload };
    case NewsTypes.ERROR_NEWS:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
