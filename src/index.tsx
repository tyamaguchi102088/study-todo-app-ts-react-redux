'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './containers/App';
import { Action, createStore, Store, compose } from 'redux';
import { IRootState } from './stores';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// importしたreducerを渡してstoreを作成
const store: Store<IRootState, Action> = 
  createStore(
    reducers,
    composeEnhancers()
  );

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);