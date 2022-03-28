import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import { configureStore, history } from './store/store';
import Home from './pages/Home';
import Notification from './components/Notification';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/">
          <Home />
          <Notification />
        </Route>
      </ConnectedRouter>
    </Provider>
  );
}

export default memo(App);
