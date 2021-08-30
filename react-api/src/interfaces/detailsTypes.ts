import { IArticle } from "./types";

export interface DetailsState {
  article: IArticle | null;
  loading: boolean;
  error: string | null;
}

export enum DetailsType {
  REQUEST_DETAILS = 'REQUEST_DETAILS',
  RECEIVE_DETAILS = 'RECEIVE_DETAILS',
  ERROR_DETAILS = 'ERROR_DETAILS',
}

interface RequestDetails {
  type: DetailsType.REQUEST_DETAILS;
}

interface ReceiveDetails {
  type: DetailsType.RECEIVE_DETAILS;
  payload: IArticle;
}

interface ErrorDetails {
  type: DetailsType.ERROR_DETAILS;
  payload: string;
}

export type DetailsAction = RequestDetails | ReceiveDetails | ErrorDetails
