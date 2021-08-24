import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './app.scss';
import { Dashboard } from './components/dashboard/Dashboard';
import { Header } from './components/header/Header';
import { About } from './pages/about/About';
import { Details } from './pages/details/Details';
import { NotFoundPage } from './pages/not-found/NotFoundPage';

const App = (): JSX.Element => {
  const location = useLocation();
  return (
    <div className="app">
      <Header />
      <TransitionGroup className="fade">
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/about" component={About} />
            <Route path="/details/:id" component={Details} />
            <Route path="/*" component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
