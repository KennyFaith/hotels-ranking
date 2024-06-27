import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HotelsPage from './pages/HotelsPage';
import CategoriesPage from './pages/CategoriesPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Hotels</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={HotelsPage} />
          <Route path="/categories" component={CategoriesPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
