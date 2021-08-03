import React from 'react';
import { SearchBar } from './components/search-bar/SearchBar';
import './app.scss';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <SearchBar />
    </div>
  );
};

export default App;
