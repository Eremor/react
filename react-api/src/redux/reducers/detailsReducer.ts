import { DetailsAction, DetailsState, DetailsType } from "../../interfaces/detailsTypes"

const initialState:DetailsState = {
  article: null,
  loading: false,
  error: null
}

export const detailsReducer = (state = initialState, action:DetailsAction):DetailsState => {
  switch(action.type) {
    case DetailsType.REQUEST_DETAILS:
      return { ...state, loading: true };
    case DetailsType.RECEIVE_DETAILS:
      return { ...state, loading: false, article: action.payload };
    case DetailsType.ERROR_DETAILS:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
