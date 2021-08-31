import { combineReducers } from '@reduxjs/toolkit';
import { detailsReducer } from './detailsReducer';
import { newsReducer } from './newsReducer';
import { requestValueReducer } from './requestValueReducer';

export const rootReducer = combineReducers({
  news: newsReducer,
  details: detailsReducer,
  requestValue: requestValueReducer,
});
