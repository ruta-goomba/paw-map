/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.dev';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCrimesInitial, loadCrimeCategories, loadCrimeDates, loadCrimeHotSpotsInitial} from './actions/crimeActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCrimesInitial());
store.dispatch(loadCrimeCategories());
store.dispatch(loadCrimeDates());
store.dispatch(loadCrimeHotSpotsInitial());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
