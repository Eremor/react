import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.scss';
import { Dashboard } from './components/dashboard/Dashboard';
import { Header } from './components/header/Header';
import { About } from './pages/About';
import { NotFoundPage } from './pages/NotFoundPage';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
