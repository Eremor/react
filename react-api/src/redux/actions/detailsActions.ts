import { IRequestData } from './../../interfaces/types';
import { Dispatch } from "react";
import { DetailsAction, DetailsType } from "../../interfaces/detailsTypes";
import { API_KEY, BASE_URL, IArticle } from "../../interfaces/types";

export const requestDetails = (): DetailsAction => {
  return { type: DetailsType.REQUEST_DETAILS }
}

export const receiveDetails = (data: IArticle): DetailsAction => {
  return { type: DetailsType.RECEIVE_DETAILS, payload: data }
}

export const errorDetails = (error: string): DetailsAction => {
  return { type: DetailsType.ERROR_DETAILS, payload: error }
}

export const getDetailsNews = (qInTitle: string) => {
  return async (dispatch: Dispatch<DetailsAction>) => {
    dispatch(requestDetails());

    await fetch(`${BASE_URL}/everything?apiKey=${API_KEY}&qInTitle=${qInTitle}`)
    .then((response) => response.json())
    .then((data: IRequestData) => dispatch(receiveDetails(data.articles[0])))
    .catch((error: string) => dispatch(errorDetails(error)))
  }
}
