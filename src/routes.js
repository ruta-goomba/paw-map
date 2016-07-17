import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
  </Route>
);
