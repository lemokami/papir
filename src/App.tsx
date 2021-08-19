import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Paper from './pages/Paper';
import NotFound from './pages/404';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/404' exact component={NotFound} />
        <Route path='/:message' component={Paper} />
      </Switch>
    </Router>
  );
}

export default App;
