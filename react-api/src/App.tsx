import React from 'react';
import './app.scss';
import { Dashboard } from './components/dashboard/Dashboard';
import { API } from './services/api';

const App = (): JSX.Element => {
  // const api = new API();
  // const res = api.getNews('tesla', 1);

  return (
    <div className="app">
      <Dashboard />
    </div>
  );
};

export default App;
