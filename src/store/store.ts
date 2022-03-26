import {
  createStore,
  applyMiddleware,
  PreloadedState,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import rootReducer, { RootState } from './reducers';
import staticSagas from './sagas';

export const history = createBrowserHistory();
export const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState?: PreloadedState<RootState | any>) {
  // configure middlewares
  const middlewares = [sagaMiddleware, routerMiddleware];
  // compose enhancers
  const composedEnhancers = compose(composeWithDevTools(applyMiddleware(...middlewares)));

  // create store
  const store = createStore(
    rootReducer(history),
    initialState,
    composedEnhancers,
  );
  sagaMiddleware.run(staticSagas);
  return store;
}
