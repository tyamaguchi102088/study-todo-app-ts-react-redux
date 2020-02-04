'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import { Action, Store } from 'redux';
import { IRootState } from './stores';
import configureStore from './configureStore'

const store: Store<IRootState, Action> = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
