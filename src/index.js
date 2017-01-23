/* eslint-disable no-console */
console.log('hi');

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GloceryItemsPage from './components/GloceryItemsPage';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadGloceryItems} from './actions/itemActions';

injectTapEventPlugin(); // for Material-UI
const store = configureStore(); // if pass initialState will overwrite the default state set up, state = []
store.dispatch(loadGloceryItems());

const App = () => (
  <MuiThemeProvider>
    <GloceryItemsPage />
  </MuiThemeProvider>
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
