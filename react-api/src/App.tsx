import React from 'react';
import './app.scss';
import { Dashboard } from './components/dashboard/Dashboard';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
};

export default App;
