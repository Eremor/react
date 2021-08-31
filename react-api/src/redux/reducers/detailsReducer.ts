import {
  DetailsAction,
  DetailsState,
  DetailsTypes,
} from '../../interfaces/detailsTypes';

const initialState: DetailsState = {
  article: null,
  loading: false,
  error: null,
};

export const detailsReducer = (
  state = initialState,
  action: DetailsAction
): DetailsState => {
  switch (action.type) {
    case DetailsTypes.REQUEST_DETAILS:
      return { ...state, loading: true };
    case DetailsTypes.RECEIVE_DETAILS:
      return { ...state, loading: false, article: action.payload };
    case DetailsTypes.ERROR_DETAILS:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
