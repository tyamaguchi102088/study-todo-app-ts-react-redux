import { rootSaga } from './sagas';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = initialState => {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = composeEnhancers(applyMiddleware(...middlewares));

  // importしたreducer, middleware, enhancerを渡してstoreを作成
  const store = createStore(
    reducers,
    initialState,
    middlewareEnhancer
  );
  sagaMiddleware.run(rootSaga);
  return store
}

export default configureStore;
