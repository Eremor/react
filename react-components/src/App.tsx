import React from 'react';
import './app.scss';
import { SearchBar } from './components/search-bar/SearchBar';
import { CardContainer } from './components/card/CardContainer';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <SearchBar />
      <CardContainer />
    </div>
  );
};

export default App;
