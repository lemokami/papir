import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Paper from './pages/Paper';
import NotFound from './pages/404';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/404' exact component={NotFound} />
          <Route path='/:message' component={Paper} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
