import { combineReducers } from '@reduxjs/toolkit';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({
  news: newsReducer,
});
