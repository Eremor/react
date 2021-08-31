import { IArticle } from './types';

export interface DetailsState {
  article: IArticle | null;
  loading: boolean;
  error: string | null;
}

export enum DetailsTypes {
  REQUEST_DETAILS = 'REQUEST_DETAILS',
  RECEIVE_DETAILS = 'RECEIVE_DETAILS',
  ERROR_DETAILS = 'ERROR_DETAILS',
}

interface RequestDetails {
  type: DetailsTypes.REQUEST_DETAILS;
}

interface ReceiveDetails {
  type: DetailsTypes.RECEIVE_DETAILS;
  payload: IArticle;
}

interface ErrorDetails {
  type: DetailsTypes.ERROR_DETAILS;
  payload: string;
}

export type DetailsAction = RequestDetails | ReceiveDetails | ErrorDetails;
